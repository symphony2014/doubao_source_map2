// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R3' to 'serializeOuter'
// - Renamed export 'dy' to 'htmlConstants'
// - Renamed export 'qC' to 'serialize'
// - Renamed export 'P4' to 'tokenizerStates'
// - Renamed export '_b' to 'Parser'
// - Renamed export 'WU' to 'tokenTypes'
// - Renamed export 'Qc' to 'parse'
// - Renamed export 'Bm' to 'parseFragment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5374.45e7693f.js
         * chunkId: 5374
         * moduleId: 948150
         */
module.exports = function (module, exports, require) {
  var a;
  var r;
  var n;
  var i;
  var o;
  var c;
  var E;
  var T;
  var h;
  var l;
  var _;
  var A;
  var d;
  var u;
  var m;
  var p;
  var N;
  var I;
  var S;
  var C;
  var D;
  var O;
  var R;
  var L;
  var f;
  var g;
  var k;
  var P;
  var M;
  var b;
  var B;
  var H = {};
  var U = {};
  let F = new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]);
  (a = p ||= {})[a.EOF = -1] = "EOF";
  a[a.NULL = 0] = "NULL";
  a[a.TABULATION = 9] = "TABULATION";
  a[a.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN";
  a[a.LINE_FEED = 10] = "LINE_FEED";
  a[a.FORM_FEED = 12] = "FORM_FEED";
  a[a.SPACE = 32] = "SPACE";
  a[a.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK";
  a[a.QUOTATION_MARK = 34] = "QUOTATION_MARK";
  a[a.AMPERSAND = 38] = "AMPERSAND";
  a[a.APOSTROPHE = 39] = "APOSTROPHE";
  a[a.HYPHEN_MINUS = 45] = "HYPHEN_MINUS";
  a[a.SOLIDUS = 47] = "SOLIDUS";
  a[a.DIGIT_0 = 48] = "DIGIT_0";
  a[a.DIGIT_9 = 57] = "DIGIT_9";
  a[a.SEMICOLON = 59] = "SEMICOLON";
  a[a.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN";
  a[a.EQUALS_SIGN = 61] = "EQUALS_SIGN";
  a[a.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN";
  a[a.QUESTION_MARK = 63] = "QUESTION_MARK";
  a[a.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A";
  a[a.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z";
  a[a.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET";
  a[a.GRAVE_ACCENT = 96] = "GRAVE_ACCENT";
  a[a.LATIN_SMALL_A = 97] = "LATIN_SMALL_A";
  a[a.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
  let y = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system"
  };
  function G(e) {
    return e >= 55296 && e <= 57343;
  }
  function w(e) {
    return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
  }
  function x(e) {
    return e >= 64976 && e <= 65007 || F.has(e);
  }
  (r = N ||= {}).controlCharacterInInputStream = "control-character-in-input-stream";
  r.noncharacterInInputStream = "noncharacter-in-input-stream";
  r.surrogateInInputStream = "surrogate-in-input-stream";
  r.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus";
  r.endTagWithAttributes = "end-tag-with-attributes";
  r.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus";
  r.unexpectedSolidusInTag = "unexpected-solidus-in-tag";
  r.unexpectedNullCharacter = "unexpected-null-character";
  r.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name";
  r.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name";
  r.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name";
  r.missingEndTagName = "missing-end-tag-name";
  r.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name";
  r.unknownNamedCharacterReference = "unknown-named-character-reference";
  r.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference";
  r.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier";
  r.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value";
  r.eofBeforeTagName = "eof-before-tag-name";
  r.eofInTag = "eof-in-tag";
  r.missingAttributeValue = "missing-attribute-value";
  r.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes";
  r.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword";
  r.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers";
  r.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword";
  r.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier";
  r.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier";
  r.missingDoctypePublicIdentifier = "missing-doctype-public-identifier";
  r.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier";
  r.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier";
  r.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier";
  r.cdataInHtmlContent = "cdata-in-html-content";
  r.incorrectlyOpenedComment = "incorrectly-opened-comment";
  r.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text";
  r.eofInDoctype = "eof-in-doctype";
  r.nestedComment = "nested-comment";
  r.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment";
  r.eofInComment = "eof-in-comment";
  r.incorrectlyClosedComment = "incorrectly-closed-comment";
  r.eofInCdata = "eof-in-cdata";
  r.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference";
  r.nullCharacterReference = "null-character-reference";
  r.surrogateCharacterReference = "surrogate-character-reference";
  r.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range";
  r.controlCharacterReference = "control-character-reference";
  r.noncharacterCharacterReference = "noncharacter-character-reference";
  r.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name";
  r.missingDoctypeName = "missing-doctype-name";
  r.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name";
  r.duplicateAttribute = "duplicate-attribute";
  r.nonConformingDoctype = "non-conforming-doctype";
  r.missingDoctype = "missing-doctype";
  r.misplacedDoctype = "misplaced-doctype";
  r.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element";
  r.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements";
  r.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head";
  r.openElementsLeftAfterEof = "open-elements-left-after-eof";
  r.abandonedHeadElementChild = "abandoned-head-element-child";
  r.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element";
  r.nestedNoscriptInHead = "nested-noscript-in-head";
  r.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
  class Y {
    constructor(e) {
      this.handler = e;
      this.html = "";
      this.pos = -1;
      this.lastGapPos = -2;
      this.gapStack = [];
      this.skipNextNewLine = false;
      this.lastChunkWritten = false;
      this.endOfChunkHit = false;
      this.bufferWaterline = 65536;
      this.isEol = false;
      this.lineStartPos = 0;
      this.droppedBufferSize = 0;
      this.line = 1;
      this.lastErrOffset = -1;
    }
    get col() {
      return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
      return this.droppedBufferSize + this.pos;
    }
    getError(e, t) {
      let {
        line: s,
        col: a,
        offset: r
      } = this;
      let n = a + t;
      let i = r + t;
      return {
        code: e,
        startLine: s,
        endLine: s,
        startCol: n,
        endCol: n,
        startOffset: i,
        endOffset: i
      };
    }
    _err(e) {
      if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
        this.lastErrOffset = this.offset;
        this.handler.onParseError(this.getError(e, 0));
      }
    }
    _addGap() {
      this.gapStack.push(this.lastGapPos);
      this.lastGapPos = this.pos;
    }
    _processSurrogate(e) {
      if (this.pos !== this.html.length - 1) {
        let t = this.html.charCodeAt(this.pos + 1);
        if (t >= 56320 && t <= 57343) {
          this.pos++;
          this._addGap();
          return (e - 55296) * 1024 + 9216 + t;
        }
      } else if (!this.lastChunkWritten) {
        this.endOfChunkHit = true;
        return p.EOF;
      }
      this._err(N.surrogateInInputStream);
      return e;
    }
    willDropParsedChunk() {
      return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
      if (this.willDropParsedChunk()) {
        this.html = this.html.substring(this.pos);
        this.lineStartPos -= this.pos;
        this.droppedBufferSize += this.pos;
        this.pos = 0;
        this.lastGapPos = -2;
        this.gapStack.length = 0;
      }
    }
    write(e, t) {
      if (this.html.length > 0) {
        this.html += e;
      } else {
        this.html = e;
      }
      this.endOfChunkHit = false;
      this.lastChunkWritten = t;
    }
    insertHtmlAtCurrentPos(e) {
      this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1);
      this.endOfChunkHit = false;
    }
    startsWith(e, t) {
      if (this.pos + e.length > this.html.length) {
        this.endOfChunkHit = !this.lastChunkWritten;
        return false;
      }
      if (t) {
        return this.html.startsWith(e, this.pos);
      }
      for (let t = 0; t < e.length; t++) {
        if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) {
          return false;
        }
      }
      return true;
    }
    peek(e) {
      let t = this.pos + e;
      if (t >= this.html.length) {
        this.endOfChunkHit = !this.lastChunkWritten;
        return p.EOF;
      }
      let s = this.html.charCodeAt(t);
      if (s === p.CARRIAGE_RETURN) {
        return p.LINE_FEED;
      } else {
        return s;
      }
    }
    advance() {
      this.pos++;
      if (this.isEol) {
        this.isEol = false;
        this.line++;
        this.lineStartPos = this.pos;
      }
      if (this.pos >= this.html.length) {
        this.endOfChunkHit = !this.lastChunkWritten;
        return p.EOF;
      }
      let e = this.html.charCodeAt(this.pos);
      if (e === p.CARRIAGE_RETURN) {
        this.isEol = true;
        this.skipNextNewLine = true;
        return p.LINE_FEED;
      } else if (e === p.LINE_FEED && (this.isEol = true, this.skipNextNewLine)) {
        this.line--;
        this.skipNextNewLine = false;
        this._addGap();
        return this.advance();
      } else {
        this.skipNextNewLine = false;
        if (G(e)) {
          e = this._processSurrogate(e);
        }
        if (this.handler.onParseError !== null && (!(e > 31) || !(e < 127)) && e !== p.LINE_FEED && e !== p.CARRIAGE_RETURN && (!(e > 159) || !(e < 64976))) {
          this._checkForProblematicCharacters(e);
        }
        return e;
      }
    }
    _checkForProblematicCharacters(e) {
      if (w(e)) {
        this._err(N.controlCharacterInInputStream);
      } else if (x(e)) {
        this._err(N.noncharacterInInputStream);
      }
    }
    retreat(e) {
      for (this.pos -= e; this.pos < this.lastGapPos;) {
        this.lastGapPos = this.gapStack.pop();
        this.pos--;
      }
      this.isEol = false;
    }
  }
  function v(e, t) {
    for (let s = e.attrs.length - 1; s >= 0; s--) {
      if (e.attrs[s].name === t) {
        return e.attrs[s].value;
      }
    }
    return null;
  }
  (n = I ||= {})[n.CHARACTER = 0] = "CHARACTER";
  n[n.NULL_CHARACTER = 1] = "NULL_CHARACTER";
  n[n.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER";
  n[n.START_TAG = 3] = "START_TAG";
  n[n.END_TAG = 4] = "END_TAG";
  n[n.COMMENT = 5] = "COMMENT";
  n[n.DOCTYPE = 6] = "DOCTYPE";
  n[n.EOF = 7] = "EOF";
  n[n.HIBERNATION = 8] = "HIBERNATION";
  let Q = new Uint16Array("ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀\u205F\u200ASpace;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ\u2000\0\u2008⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map(e => e.charCodeAt(0)));
  let q = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
  function W(e) {
    return e >= C.ZERO && e <= C.NINE;
  }
  (i = C ||= {})[i.NUM = 35] = "NUM";
  i[i.SEMI = 59] = "SEMI";
  i[i.EQUALS = 61] = "EQUALS";
  i[i.ZERO = 48] = "ZERO";
  i[i.NINE = 57] = "NINE";
  i[i.LOWER_A = 97] = "LOWER_A";
  i[i.LOWER_F = 102] = "LOWER_F";
  i[i.LOWER_X = 120] = "LOWER_X";
  i[i.LOWER_Z = 122] = "LOWER_Z";
  i[i.UPPER_A = 65] = "UPPER_A";
  i[i.UPPER_F = 70] = "UPPER_F";
  i[i.UPPER_Z = 90] = "UPPER_Z";
  (o = D ||= {})[o.VALUE_LENGTH = 49152] = "VALUE_LENGTH";
  o[o.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH";
  o[o.JUMP_TABLE = 127] = "JUMP_TABLE";
  (c = O ||= {})[c.EntityStart = 0] = "EntityStart";
  c[c.NumericStart = 1] = "NumericStart";
  c[c.NumericDecimal = 2] = "NumericDecimal";
  c[c.NumericHex = 3] = "NumericHex";
  c[c.NamedEntity = 4] = "NamedEntity";
  (E = R ||= {})[E.Legacy = 0] = "Legacy";
  E[E.Strict = 1] = "Strict";
  E[E.Attribute = 2] = "Attribute";
  class K {
    constructor(e, t, s) {
      this.decodeTree = e;
      this.emitCodePoint = t;
      this.errors = s;
      this.state = O.EntityStart;
      this.consumed = 1;
      this.result = 0;
      this.treeIndex = 0;
      this.excess = 1;
      this.decodeMode = R.Strict;
    }
    startEntity(e) {
      this.decodeMode = e;
      this.state = O.EntityStart;
      this.result = 0;
      this.treeIndex = 0;
      this.excess = 1;
      this.consumed = 1;
    }
    write(e, t) {
      switch (this.state) {
        case O.EntityStart:
          if (e.charCodeAt(t) === C.NUM) {
            this.state = O.NumericStart;
            this.consumed += 1;
            return this.stateNumericStart(e, t + 1);
          }
          this.state = O.NamedEntity;
          return this.stateNamedEntity(e, t);
        case O.NumericStart:
          return this.stateNumericStart(e, t);
        case O.NumericDecimal:
          return this.stateNumericDecimal(e, t);
        case O.NumericHex:
          return this.stateNumericHex(e, t);
        case O.NamedEntity:
          return this.stateNamedEntity(e, t);
      }
    }
    stateNumericStart(e, t) {
      if (t >= e.length) {
        return -1;
      } else if ((e.charCodeAt(t) | 32) === C.LOWER_X) {
        this.state = O.NumericHex;
        this.consumed += 1;
        return this.stateNumericHex(e, t + 1);
      } else {
        this.state = O.NumericDecimal;
        return this.stateNumericDecimal(e, t);
      }
    }
    addToNumericResult(e, t, s, a) {
      if (t !== s) {
        let r = s - t;
        this.result = this.result * Math.pow(a, r) + Number.parseInt(e.substr(t, r), a);
        this.consumed += r;
      }
    }
    stateNumericHex(e, t) {
      let s = t;
      while (t < e.length) {
        var a;
        let r = e.charCodeAt(t);
        if (!W(r) && (!((a = r) >= C.UPPER_A) || !(a <= C.UPPER_F)) && (!(a >= C.LOWER_A) || !(a <= C.LOWER_F))) {
          this.addToNumericResult(e, s, t, 16);
          return this.emitNumericEntity(r, 3);
        }
        t += 1;
      }
      this.addToNumericResult(e, s, t, 16);
      return -1;
    }
    stateNumericDecimal(e, t) {
      let s = t;
      while (t < e.length) {
        let a = e.charCodeAt(t);
        if (!W(a)) {
          this.addToNumericResult(e, s, t, 10);
          return this.emitNumericEntity(a, 2);
        }
        t += 1;
      }
      this.addToNumericResult(e, s, t, 10);
      return -1;
    }
    emitNumericEntity(e, t) {
      var s;
      var a;
      if (this.consumed <= t) {
        if ((s = this.errors) !== null && s !== undefined) {
          s.absenceOfDigitsInNumericCharacterReference(this.consumed);
        }
        return 0;
      }
      if (e === C.SEMI) {
        this.consumed += 1;
      } else if (this.decodeMode === R.Strict) {
        return 0;
      }
      this.emitCodePoint((a = this.result) >= 55296 && a <= 57343 || a > 1114111 ? 65533 : q.get(a) ?? a, this.consumed);
      if (this.errors) {
        if (e !== C.SEMI) {
          this.errors.missingSemicolonAfterCharacterReference();
        }
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
    stateNamedEntity(e, t) {
      let {
        decodeTree: s
      } = this;
      let a = s[this.treeIndex];
      let r = (a & D.VALUE_LENGTH) >> 14;
      for (; t < e.length; t++, this.excess++) {
        let n = e.charCodeAt(t);
        this.treeIndex = function (e, t, s, a) {
          let r = (t & D.BRANCH_LENGTH) >> 7;
          let n = t & D.JUMP_TABLE;
          if (r === 0) {
            if (n !== 0 && a === n) {
              return s;
            } else {
              return -1;
            }
          }
          if (n) {
            let t = a - n;
            if (t < 0 || t >= r) {
              return -1;
            } else {
              return e[s + t] - 1;
            }
          }
          let i = s;
          let o = i + r - 1;
          while (i <= o) {
            let t = i + o >>> 1;
            let s = e[t];
            if (s < a) {
              i = t + 1;
            } else {
              if (!(s > a)) {
                return e[t + r];
              }
              o = t - 1;
            }
          }
          return -1;
        }(s, a, this.treeIndex + Math.max(1, r), n);
        if (this.treeIndex < 0) {
          if (this.result === 0 || this.decodeMode === R.Attribute && (r === 0 || function (e) {
            var t;
            return e === C.EQUALS || (t = e) >= C.UPPER_A && t <= C.UPPER_Z || t >= C.LOWER_A && t <= C.LOWER_Z || W(t);
          }(n))) {
            return 0;
          } else {
            return this.emitNotTerminatedNamedEntity();
          }
        }
        if ((r = ((a = s[this.treeIndex]) & D.VALUE_LENGTH) >> 14) != 0) {
          if (n === C.SEMI) {
            return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
          }
          if (this.decodeMode !== R.Strict) {
            this.result = this.treeIndex;
            this.consumed += this.excess;
            this.excess = 0;
          }
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var e;
      let {
        result: t,
        decodeTree: s
      } = this;
      let a = (s[t] & D.VALUE_LENGTH) >> 14;
      this.emitNamedEntityData(t, a, this.consumed);
      if ((e = this.errors) !== null && e !== undefined) {
        e.missingSemicolonAfterCharacterReference();
      }
      return this.consumed;
    }
    emitNamedEntityData(e, t, s) {
      let {
        decodeTree: a
      } = this;
      this.emitCodePoint(t === 1 ? a[e] & ~D.VALUE_LENGTH : a[e + 1], s);
      if (t === 3) {
        this.emitCodePoint(a[e + 2], s);
      }
      return s;
    }
    end() {
      var e;
      switch (this.state) {
        case O.NamedEntity:
          if (this.result !== 0 && (this.decodeMode !== R.Attribute || this.result === this.treeIndex)) {
            return this.emitNotTerminatedNamedEntity();
          } else {
            return 0;
          }
        case O.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case O.NumericHex:
          return this.emitNumericEntity(0, 3);
        case O.NumericStart:
          if ((e = this.errors) !== null && e !== undefined) {
            e.absenceOfDigitsInNumericCharacterReference(this.consumed);
          }
          return 0;
        case O.EntityStart:
          return 0;
      }
    }
  }
  (T = L ||= {}).HTML = "http://www.w3.org/1999/xhtml";
  T.MATHML = "http://www.w3.org/1998/Math/MathML";
  T.SVG = "http://www.w3.org/2000/svg";
  T.XLINK = "http://www.w3.org/1999/xlink";
  T.XML = "http://www.w3.org/XML/1998/namespace";
  T.XMLNS = "http://www.w3.org/2000/xmlns/";
  (h = f ||= {}).TYPE = "type";
  h.ACTION = "action";
  h.ENCODING = "encoding";
  h.PROMPT = "prompt";
  h.NAME = "name";
  h.COLOR = "color";
  h.FACE = "face";
  h.SIZE = "size";
  (l = g ||= {}).NO_QUIRKS = "no-quirks";
  l.QUIRKS = "quirks";
  l.LIMITED_QUIRKS = "limited-quirks";
  (_ = k ||= {}).A = "a";
  _.ADDRESS = "address";
  _.ANNOTATION_XML = "annotation-xml";
  _.APPLET = "applet";
  _.AREA = "area";
  _.ARTICLE = "article";
  _.ASIDE = "aside";
  _.B = "b";
  _.BASE = "base";
  _.BASEFONT = "basefont";
  _.BGSOUND = "bgsound";
  _.BIG = "big";
  _.BLOCKQUOTE = "blockquote";
  _.BODY = "body";
  _.BR = "br";
  _.BUTTON = "button";
  _.CAPTION = "caption";
  _.CENTER = "center";
  _.CODE = "code";
  _.COL = "col";
  _.COLGROUP = "colgroup";
  _.DD = "dd";
  _.DESC = "desc";
  _.DETAILS = "details";
  _.DIALOG = "dialog";
  _.DIR = "dir";
  _.DIV = "div";
  _.DL = "dl";
  _.DT = "dt";
  _.EM = "em";
  _.EMBED = "embed";
  _.FIELDSET = "fieldset";
  _.FIGCAPTION = "figcaption";
  _.FIGURE = "figure";
  _.FONT = "font";
  _.FOOTER = "footer";
  _.FOREIGN_OBJECT = "foreignObject";
  _.FORM = "form";
  _.FRAME = "frame";
  _.FRAMESET = "frameset";
  _.H1 = "h1";
  _.H2 = "h2";
  _.H3 = "h3";
  _.H4 = "h4";
  _.H5 = "h5";
  _.H6 = "h6";
  _.HEAD = "head";
  _.HEADER = "header";
  _.HGROUP = "hgroup";
  _.HR = "hr";
  _.HTML = "html";
  _.I = "i";
  _.IMG = "img";
  _.IMAGE = "image";
  _.INPUT = "input";
  _.IFRAME = "iframe";
  _.KEYGEN = "keygen";
  _.LABEL = "label";
  _.LI = "li";
  _.LINK = "link";
  _.LISTING = "listing";
  _.MAIN = "main";
  _.MALIGNMARK = "malignmark";
  _.MARQUEE = "marquee";
  _.MATH = "math";
  _.MENU = "menu";
  _.META = "meta";
  _.MGLYPH = "mglyph";
  _.MI = "mi";
  _.MO = "mo";
  _.MN = "mn";
  _.MS = "ms";
  _.MTEXT = "mtext";
  _.NAV = "nav";
  _.NOBR = "nobr";
  _.NOFRAMES = "noframes";
  _.NOEMBED = "noembed";
  _.NOSCRIPT = "noscript";
  _.OBJECT = "object";
  _.OL = "ol";
  _.OPTGROUP = "optgroup";
  _.OPTION = "option";
  _.P = "p";
  _.PARAM = "param";
  _.PLAINTEXT = "plaintext";
  _.PRE = "pre";
  _.RB = "rb";
  _.RP = "rp";
  _.RT = "rt";
  _.RTC = "rtc";
  _.RUBY = "ruby";
  _.S = "s";
  _.SCRIPT = "script";
  _.SEARCH = "search";
  _.SECTION = "section";
  _.SELECT = "select";
  _.SOURCE = "source";
  _.SMALL = "small";
  _.SPAN = "span";
  _.STRIKE = "strike";
  _.STRONG = "strong";
  _.STYLE = "style";
  _.SUB = "sub";
  _.SUMMARY = "summary";
  _.SUP = "sup";
  _.TABLE = "table";
  _.TBODY = "tbody";
  _.TEMPLATE = "template";
  _.TEXTAREA = "textarea";
  _.TFOOT = "tfoot";
  _.TD = "td";
  _.TH = "th";
  _.THEAD = "thead";
  _.TITLE = "title";
  _.TR = "tr";
  _.TRACK = "track";
  _.TT = "tt";
  _.U = "u";
  _.UL = "ul";
  _.SVG = "svg";
  _.VAR = "var";
  _.WBR = "wbr";
  _.XMP = "xmp";
  (A = P ||= {})[A.UNKNOWN = 0] = "UNKNOWN";
  A[A.A = 1] = "A";
  A[A.ADDRESS = 2] = "ADDRESS";
  A[A.ANNOTATION_XML = 3] = "ANNOTATION_XML";
  A[A.APPLET = 4] = "APPLET";
  A[A.AREA = 5] = "AREA";
  A[A.ARTICLE = 6] = "ARTICLE";
  A[A.ASIDE = 7] = "ASIDE";
  A[A.B = 8] = "B";
  A[A.BASE = 9] = "BASE";
  A[A.BASEFONT = 10] = "BASEFONT";
  A[A.BGSOUND = 11] = "BGSOUND";
  A[A.BIG = 12] = "BIG";
  A[A.BLOCKQUOTE = 13] = "BLOCKQUOTE";
  A[A.BODY = 14] = "BODY";
  A[A.BR = 15] = "BR";
  A[A.BUTTON = 16] = "BUTTON";
  A[A.CAPTION = 17] = "CAPTION";
  A[A.CENTER = 18] = "CENTER";
  A[A.CODE = 19] = "CODE";
  A[A.COL = 20] = "COL";
  A[A.COLGROUP = 21] = "COLGROUP";
  A[A.DD = 22] = "DD";
  A[A.DESC = 23] = "DESC";
  A[A.DETAILS = 24] = "DETAILS";
  A[A.DIALOG = 25] = "DIALOG";
  A[A.DIR = 26] = "DIR";
  A[A.DIV = 27] = "DIV";
  A[A.DL = 28] = "DL";
  A[A.DT = 29] = "DT";
  A[A.EM = 30] = "EM";
  A[A.EMBED = 31] = "EMBED";
  A[A.FIELDSET = 32] = "FIELDSET";
  A[A.FIGCAPTION = 33] = "FIGCAPTION";
  A[A.FIGURE = 34] = "FIGURE";
  A[A.FONT = 35] = "FONT";
  A[A.FOOTER = 36] = "FOOTER";
  A[A.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT";
  A[A.FORM = 38] = "FORM";
  A[A.FRAME = 39] = "FRAME";
  A[A.FRAMESET = 40] = "FRAMESET";
  A[A.H1 = 41] = "H1";
  A[A.H2 = 42] = "H2";
  A[A.H3 = 43] = "H3";
  A[A.H4 = 44] = "H4";
  A[A.H5 = 45] = "H5";
  A[A.H6 = 46] = "H6";
  A[A.HEAD = 47] = "HEAD";
  A[A.HEADER = 48] = "HEADER";
  A[A.HGROUP = 49] = "HGROUP";
  A[A.HR = 50] = "HR";
  A[A.HTML = 51] = "HTML";
  A[A.I = 52] = "I";
  A[A.IMG = 53] = "IMG";
  A[A.IMAGE = 54] = "IMAGE";
  A[A.INPUT = 55] = "INPUT";
  A[A.IFRAME = 56] = "IFRAME";
  A[A.KEYGEN = 57] = "KEYGEN";
  A[A.LABEL = 58] = "LABEL";
  A[A.LI = 59] = "LI";
  A[A.LINK = 60] = "LINK";
  A[A.LISTING = 61] = "LISTING";
  A[A.MAIN = 62] = "MAIN";
  A[A.MALIGNMARK = 63] = "MALIGNMARK";
  A[A.MARQUEE = 64] = "MARQUEE";
  A[A.MATH = 65] = "MATH";
  A[A.MENU = 66] = "MENU";
  A[A.META = 67] = "META";
  A[A.MGLYPH = 68] = "MGLYPH";
  A[A.MI = 69] = "MI";
  A[A.MO = 70] = "MO";
  A[A.MN = 71] = "MN";
  A[A.MS = 72] = "MS";
  A[A.MTEXT = 73] = "MTEXT";
  A[A.NAV = 74] = "NAV";
  A[A.NOBR = 75] = "NOBR";
  A[A.NOFRAMES = 76] = "NOFRAMES";
  A[A.NOEMBED = 77] = "NOEMBED";
  A[A.NOSCRIPT = 78] = "NOSCRIPT";
  A[A.OBJECT = 79] = "OBJECT";
  A[A.OL = 80] = "OL";
  A[A.OPTGROUP = 81] = "OPTGROUP";
  A[A.OPTION = 82] = "OPTION";
  A[A.P = 83] = "P";
  A[A.PARAM = 84] = "PARAM";
  A[A.PLAINTEXT = 85] = "PLAINTEXT";
  A[A.PRE = 86] = "PRE";
  A[A.RB = 87] = "RB";
  A[A.RP = 88] = "RP";
  A[A.RT = 89] = "RT";
  A[A.RTC = 90] = "RTC";
  A[A.RUBY = 91] = "RUBY";
  A[A.S = 92] = "S";
  A[A.SCRIPT = 93] = "SCRIPT";
  A[A.SEARCH = 94] = "SEARCH";
  A[A.SECTION = 95] = "SECTION";
  A[A.SELECT = 96] = "SELECT";
  A[A.SOURCE = 97] = "SOURCE";
  A[A.SMALL = 98] = "SMALL";
  A[A.SPAN = 99] = "SPAN";
  A[A.STRIKE = 100] = "STRIKE";
  A[A.STRONG = 101] = "STRONG";
  A[A.STYLE = 102] = "STYLE";
  A[A.SUB = 103] = "SUB";
  A[A.SUMMARY = 104] = "SUMMARY";
  A[A.SUP = 105] = "SUP";
  A[A.TABLE = 106] = "TABLE";
  A[A.TBODY = 107] = "TBODY";
  A[A.TEMPLATE = 108] = "TEMPLATE";
  A[A.TEXTAREA = 109] = "TEXTAREA";
  A[A.TFOOT = 110] = "TFOOT";
  A[A.TD = 111] = "TD";
  A[A.TH = 112] = "TH";
  A[A.THEAD = 113] = "THEAD";
  A[A.TITLE = 114] = "TITLE";
  A[A.TR = 115] = "TR";
  A[A.TRACK = 116] = "TRACK";
  A[A.TT = 117] = "TT";
  A[A.U = 118] = "U";
  A[A.UL = 119] = "UL";
  A[A.SVG = 120] = "SVG";
  A[A.VAR = 121] = "VAR";
  A[A.WBR = 122] = "WBR";
  A[A.XMP = 123] = "XMP";
  let X = new Map([[k.A, P.A], [k.ADDRESS, P.ADDRESS], [k.ANNOTATION_XML, P.ANNOTATION_XML], [k.APPLET, P.APPLET], [k.AREA, P.AREA], [k.ARTICLE, P.ARTICLE], [k.ASIDE, P.ASIDE], [k.B, P.B], [k.BASE, P.BASE], [k.BASEFONT, P.BASEFONT], [k.BGSOUND, P.BGSOUND], [k.BIG, P.BIG], [k.BLOCKQUOTE, P.BLOCKQUOTE], [k.BODY, P.BODY], [k.BR, P.BR], [k.BUTTON, P.BUTTON], [k.CAPTION, P.CAPTION], [k.CENTER, P.CENTER], [k.CODE, P.CODE], [k.COL, P.COL], [k.COLGROUP, P.COLGROUP], [k.DD, P.DD], [k.DESC, P.DESC], [k.DETAILS, P.DETAILS], [k.DIALOG, P.DIALOG], [k.DIR, P.DIR], [k.DIV, P.DIV], [k.DL, P.DL], [k.DT, P.DT], [k.EM, P.EM], [k.EMBED, P.EMBED], [k.FIELDSET, P.FIELDSET], [k.FIGCAPTION, P.FIGCAPTION], [k.FIGURE, P.FIGURE], [k.FONT, P.FONT], [k.FOOTER, P.FOOTER], [k.FOREIGN_OBJECT, P.FOREIGN_OBJECT], [k.FORM, P.FORM], [k.FRAME, P.FRAME], [k.FRAMESET, P.FRAMESET], [k.H1, P.H1], [k.H2, P.H2], [k.H3, P.H3], [k.H4, P.H4], [k.H5, P.H5], [k.H6, P.H6], [k.HEAD, P.HEAD], [k.HEADER, P.HEADER], [k.HGROUP, P.HGROUP], [k.HR, P.HR], [k.HTML, P.HTML], [k.I, P.I], [k.IMG, P.IMG], [k.IMAGE, P.IMAGE], [k.INPUT, P.INPUT], [k.IFRAME, P.IFRAME], [k.KEYGEN, P.KEYGEN], [k.LABEL, P.LABEL], [k.LI, P.LI], [k.LINK, P.LINK], [k.LISTING, P.LISTING], [k.MAIN, P.MAIN], [k.MALIGNMARK, P.MALIGNMARK], [k.MARQUEE, P.MARQUEE], [k.MATH, P.MATH], [k.MENU, P.MENU], [k.META, P.META], [k.MGLYPH, P.MGLYPH], [k.MI, P.MI], [k.MO, P.MO], [k.MN, P.MN], [k.MS, P.MS], [k.MTEXT, P.MTEXT], [k.NAV, P.NAV], [k.NOBR, P.NOBR], [k.NOFRAMES, P.NOFRAMES], [k.NOEMBED, P.NOEMBED], [k.NOSCRIPT, P.NOSCRIPT], [k.OBJECT, P.OBJECT], [k.OL, P.OL], [k.OPTGROUP, P.OPTGROUP], [k.OPTION, P.OPTION], [k.P, P.P], [k.PARAM, P.PARAM], [k.PLAINTEXT, P.PLAINTEXT], [k.PRE, P.PRE], [k.RB, P.RB], [k.RP, P.RP], [k.RT, P.RT], [k.RTC, P.RTC], [k.RUBY, P.RUBY], [k.S, P.S], [k.SCRIPT, P.SCRIPT], [k.SEARCH, P.SEARCH], [k.SECTION, P.SECTION], [k.SELECT, P.SELECT], [k.SOURCE, P.SOURCE], [k.SMALL, P.SMALL], [k.SPAN, P.SPAN], [k.STRIKE, P.STRIKE], [k.STRONG, P.STRONG], [k.STYLE, P.STYLE], [k.SUB, P.SUB], [k.SUMMARY, P.SUMMARY], [k.SUP, P.SUP], [k.TABLE, P.TABLE], [k.TBODY, P.TBODY], [k.TEMPLATE, P.TEMPLATE], [k.TEXTAREA, P.TEXTAREA], [k.TFOOT, P.TFOOT], [k.TD, P.TD], [k.TH, P.TH], [k.THEAD, P.THEAD], [k.TITLE, P.TITLE], [k.TR, P.TR], [k.TRACK, P.TRACK], [k.TT, P.TT], [k.U, P.U], [k.UL, P.UL], [k.SVG, P.SVG], [k.VAR, P.VAR], [k.WBR, P.WBR], [k.XMP, P.XMP]]);
  function V(e) {
    return X.get(e) ?? P.UNKNOWN;
  }
  let z = P;
  let J = {
    [L.HTML]: new Set([z.ADDRESS, z.APPLET, z.AREA, z.ARTICLE, z.ASIDE, z.BASE, z.BASEFONT, z.BGSOUND, z.BLOCKQUOTE, z.BODY, z.BR, z.BUTTON, z.CAPTION, z.CENTER, z.COL, z.COLGROUP, z.DD, z.DETAILS, z.DIR, z.DIV, z.DL, z.DT, z.EMBED, z.FIELDSET, z.FIGCAPTION, z.FIGURE, z.FOOTER, z.FORM, z.FRAME, z.FRAMESET, z.H1, z.H2, z.H3, z.H4, z.H5, z.H6, z.HEAD, z.HEADER, z.HGROUP, z.HR, z.HTML, z.IFRAME, z.IMG, z.INPUT, z.LI, z.LINK, z.LISTING, z.MAIN, z.MARQUEE, z.MENU, z.META, z.NAV, z.NOEMBED, z.NOFRAMES, z.NOSCRIPT, z.OBJECT, z.OL, z.P, z.PARAM, z.PLAINTEXT, z.PRE, z.SCRIPT, z.SECTION, z.SELECT, z.SOURCE, z.STYLE, z.SUMMARY, z.TABLE, z.TBODY, z.TD, z.TEMPLATE, z.TEXTAREA, z.TFOOT, z.TH, z.THEAD, z.TITLE, z.TR, z.TRACK, z.UL, z.WBR, z.XMP]),
    [L.MATHML]: new Set([z.MI, z.MO, z.MN, z.MS, z.MTEXT, z.ANNOTATION_XML]),
    [L.SVG]: new Set([z.TITLE, z.FOREIGN_OBJECT, z.DESC]),
    [L.XLINK]: new Set(),
    [L.XML]: new Set(),
    [L.XMLNS]: new Set()
  };
  let j = new Set([z.H1, z.H2, z.H3, z.H4, z.H5, z.H6]);
  let Z = new Set([k.STYLE, k.SCRIPT, k.XMP, k.IFRAME, k.NOEMBED, k.NOFRAMES, k.PLAINTEXT]);
  function $(e, t) {
    return Z.has(e) || t && e === k.NOSCRIPT;
  }
  (d = M ||= {})[d.DATA = 0] = "DATA";
  d[d.RCDATA = 1] = "RCDATA";
  d[d.RAWTEXT = 2] = "RAWTEXT";
  d[d.SCRIPT_DATA = 3] = "SCRIPT_DATA";
  d[d.PLAINTEXT = 4] = "PLAINTEXT";
  d[d.TAG_OPEN = 5] = "TAG_OPEN";
  d[d.END_TAG_OPEN = 6] = "END_TAG_OPEN";
  d[d.TAG_NAME = 7] = "TAG_NAME";
  d[d.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN";
  d[d.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN";
  d[d.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME";
  d[d.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN";
  d[d.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN";
  d[d.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME";
  d[d.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
  d[d.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN";
  d[d.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME";
  d[d.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START";
  d[d.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
  d[d.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED";
  d[d.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH";
  d[d.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
  d[d.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
  d[d.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
  d[d.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
  d[d.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
  d[d.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME";
  d[d.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME";
  d[d.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME";
  d[d.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE";
  d[d.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
  d[d.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
  d[d.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
  d[d.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
  d[d.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG";
  d[d.BOGUS_COMMENT = 40] = "BOGUS_COMMENT";
  d[d.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN";
  d[d.COMMENT_START = 42] = "COMMENT_START";
  d[d.COMMENT_START_DASH = 43] = "COMMENT_START_DASH";
  d[d.COMMENT = 44] = "COMMENT";
  d[d.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN";
  d[d.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
  d[d.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
  d[d.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
  d[d.COMMENT_END_DASH = 49] = "COMMENT_END_DASH";
  d[d.COMMENT_END = 50] = "COMMENT_END";
  d[d.COMMENT_END_BANG = 51] = "COMMENT_END_BANG";
  d[d.DOCTYPE = 52] = "DOCTYPE";
  d[d.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME";
  d[d.DOCTYPE_NAME = 54] = "DOCTYPE_NAME";
  d[d.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME";
  d[d.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
  d[d.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
  d[d.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
  d[d.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
  d[d.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
  d[d.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
  d[d.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
  d[d.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
  d[d.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
  d[d.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
  d[d.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
  d[d.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE";
  d[d.CDATA_SECTION = 68] = "CDATA_SECTION";
  d[d.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET";
  d[d.CDATA_SECTION_END = 70] = "CDATA_SECTION_END";
  d[d.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE";
  d[d.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
  let ee = {
    DATA: M.DATA,
    RCDATA: M.RCDATA,
    RAWTEXT: M.RAWTEXT,
    SCRIPT_DATA: M.SCRIPT_DATA,
    PLAINTEXT: M.PLAINTEXT,
    CDATA_SECTION: M.CDATA_SECTION
  };
  function et(e) {
    return e >= p.LATIN_CAPITAL_A && e <= p.LATIN_CAPITAL_Z;
  }
  function es(e) {
    return e >= p.LATIN_SMALL_A && e <= p.LATIN_SMALL_Z || et(e);
  }
  function ea(e) {
    return es(e) || e >= p.DIGIT_0 && e <= p.DIGIT_9;
  }
  function er(e) {
    return e === p.SPACE || e === p.LINE_FEED || e === p.TABULATION || e === p.FORM_FEED;
  }
  function en(e) {
    return er(e) || e === p.SOLIDUS || e === p.GREATER_THAN_SIGN;
  }
  class ei {
    constructor(e, t) {
      this.options = e;
      this.handler = t;
      this.paused = false;
      this.inLoop = false;
      this.inForeignNode = false;
      this.lastStartTagName = "";
      this.active = false;
      this.state = M.DATA;
      this.returnState = M.DATA;
      this.entityStartPos = 0;
      this.consumedAfterSnapshot = -1;
      this.currentCharacterToken = null;
      this.currentToken = null;
      this.currentAttr = {
        name: "",
        value: ""
      };
      this.preprocessor = new Y(t);
      this.currentLocation = this.getCurrentLocation(-1);
      this.entityDecoder = new K(Q, (e, t) => {
        this.preprocessor.pos = this.entityStartPos + t - 1;
        this._flushCodePointConsumedAsCharacterReference(e);
      }, t.onParseError ? {
        missingSemicolonAfterCharacterReference: () => {
          this._err(N.missingSemicolonAfterCharacterReference, 1);
        },
        absenceOfDigitsInNumericCharacterReference: e => {
          this._err(N.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
        },
        validateNumericCharacterReference: e => {
          let t = function (e) {
            if (e === p.NULL) {
              return N.nullCharacterReference;
            }
            if (e > 1114111) {
              return N.characterReferenceOutsideUnicodeRange;
            }
            if (G(e)) {
              return N.surrogateCharacterReference;
            }
            if (x(e)) {
              return N.noncharacterCharacterReference;
            }
            if (w(e) || e === p.CARRIAGE_RETURN) {
              return N.controlCharacterReference;
            }
            return null;
          }(e);
          if (t) {
            this._err(t, 1);
          }
        }
      } : undefined);
    }
    _err(e, t = 0) {
      var s;
      var a;
      if ((a = (s = this.handler).onParseError) !== null && a !== undefined) {
        a.call(s, this.preprocessor.getError(e, t));
      }
    }
    getCurrentLocation(e) {
      if (this.options.sourceCodeLocationInfo) {
        return {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - e,
          startOffset: this.preprocessor.offset - e,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      } else {
        return null;
      }
    }
    _runParsingLoop() {
      if (!this.inLoop) {
        for (this.inLoop = true; this.active && !this.paused;) {
          this.consumedAfterSnapshot = 0;
          let e = this._consume();
          if (!this._ensureHibernation()) {
            this._callState(e);
          }
        }
        this.inLoop = false;
      }
    }
    pause() {
      this.paused = true;
    }
    resume(e) {
      if (!this.paused) {
        throw Error("Parser was already resumed");
      }
      this.paused = false;
      if (!this.inLoop) {
        this._runParsingLoop();
        if (!this.paused && e != null) {
          e();
        }
      }
    }
    write(e, t, s) {
      this.active = true;
      this.preprocessor.write(e, t);
      this._runParsingLoop();
      if (!this.paused && s != null) {
        s();
      }
    }
    insertHtmlAtCurrentPos(e) {
      this.active = true;
      this.preprocessor.insertHtmlAtCurrentPos(e);
      this._runParsingLoop();
    }
    _ensureHibernation() {
      return !!this.preprocessor.endOfChunkHit && (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = false, true);
    }
    _consume() {
      this.consumedAfterSnapshot++;
      return this.preprocessor.advance();
    }
    _advanceBy(e) {
      this.consumedAfterSnapshot += e;
      for (let t = 0; t < e; t++) {
        this.preprocessor.advance();
      }
    }
    _consumeSequenceIfMatch(e, t) {
      return !!this.preprocessor.startsWith(e, t) && (this._advanceBy(e.length - 1), true);
    }
    _createStartTagToken() {
      this.currentToken = {
        type: I.START_TAG,
        tagName: "",
        tagID: P.UNKNOWN,
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: this.getCurrentLocation(1)
      };
    }
    _createEndTagToken() {
      this.currentToken = {
        type: I.END_TAG,
        tagName: "",
        tagID: P.UNKNOWN,
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: this.getCurrentLocation(2)
      };
    }
    _createCommentToken(e) {
      this.currentToken = {
        type: I.COMMENT,
        data: "",
        location: this.getCurrentLocation(e)
      };
    }
    _createDoctypeToken(e) {
      this.currentToken = {
        type: I.DOCTYPE,
        name: e,
        forceQuirks: false,
        publicId: null,
        systemId: null,
        location: this.currentLocation
      };
    }
    _createCharacterToken(e, t) {
      this.currentCharacterToken = {
        type: e,
        chars: t,
        location: this.currentLocation
      };
    }
    _createAttr(e) {
      this.currentAttr = {
        name: e,
        value: ""
      };
      this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
      var t;
      let s = this.currentToken;
      if (v(s, this.currentAttr.name) === null) {
        s.attrs.push(this.currentAttr);
        if (s.location && this.currentLocation) {
          ((t = s.location).attrs ?? (t.attrs = Object.create(null)))[this.currentAttr.name] = this.currentLocation;
          this._leaveAttrValue();
        }
      } else {
        this._err(N.duplicateAttribute);
      }
    }
    _leaveAttrValue() {
      if (this.currentLocation) {
        this.currentLocation.endLine = this.preprocessor.line;
        this.currentLocation.endCol = this.preprocessor.col;
        this.currentLocation.endOffset = this.preprocessor.offset;
      }
    }
    prepareToken(e) {
      this._emitCurrentCharacterToken(e.location);
      this.currentToken = null;
      if (e.location) {
        e.location.endLine = this.preprocessor.line;
        e.location.endCol = this.preprocessor.col + 1;
        e.location.endOffset = this.preprocessor.offset + 1;
      }
      this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
      let e = this.currentToken;
      this.prepareToken(e);
      e.tagID = V(e.tagName);
      if (e.type === I.START_TAG) {
        this.lastStartTagName = e.tagName;
        this.handler.onStartTag(e);
      } else {
        if (e.attrs.length > 0) {
          this._err(N.endTagWithAttributes);
        }
        if (e.selfClosing) {
          this._err(N.endTagWithTrailingSolidus);
        }
        this.handler.onEndTag(e);
      }
      this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(e) {
      this.prepareToken(e);
      this.handler.onComment(e);
      this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(e) {
      this.prepareToken(e);
      this.handler.onDoctype(e);
      this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(e) {
      if (this.currentCharacterToken) {
        if (e && this.currentCharacterToken.location) {
          this.currentCharacterToken.location.endLine = e.startLine;
          this.currentCharacterToken.location.endCol = e.startCol;
          this.currentCharacterToken.location.endOffset = e.startOffset;
        }
        switch (this.currentCharacterToken.type) {
          case I.CHARACTER:
            this.handler.onCharacter(this.currentCharacterToken);
            break;
          case I.NULL_CHARACTER:
            this.handler.onNullCharacter(this.currentCharacterToken);
            break;
          case I.WHITESPACE_CHARACTER:
            this.handler.onWhitespaceCharacter(this.currentCharacterToken);
        }
        this.currentCharacterToken = null;
      }
    }
    _emitEOFToken() {
      let e = this.getCurrentLocation(0);
      if (e) {
        e.endLine = e.startLine;
        e.endCol = e.startCol;
        e.endOffset = e.startOffset;
      }
      this._emitCurrentCharacterToken(e);
      this.handler.onEof({
        type: I.EOF,
        location: e
      });
      this.active = false;
    }
    _appendCharToCurrentCharacterToken(e, t) {
      if (this.currentCharacterToken) {
        if (this.currentCharacterToken.type === e) {
          this.currentCharacterToken.chars += t;
          return;
        }
        this.currentLocation = this.getCurrentLocation(0);
        this._emitCurrentCharacterToken(this.currentLocation);
        this.preprocessor.dropParsedChunk();
      }
      this._createCharacterToken(e, t);
    }
    _emitCodePoint(e) {
      let t = er(e) ? I.WHITESPACE_CHARACTER : e === p.NULL ? I.NULL_CHARACTER : I.CHARACTER;
      this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
    }
    _emitChars(e) {
      this._appendCharToCurrentCharacterToken(I.CHARACTER, e);
    }
    _startCharacterReference() {
      this.returnState = this.state;
      this.state = M.CHARACTER_REFERENCE;
      this.entityStartPos = this.preprocessor.pos;
      this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? R.Attribute : R.Legacy);
    }
    _isCharacterReferenceInAttribute() {
      return this.returnState === M.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === M.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === M.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(e) {
      if (this._isCharacterReferenceInAttribute()) {
        this.currentAttr.value += String.fromCodePoint(e);
      } else {
        this._emitCodePoint(e);
      }
    }
    _callState(e) {
      switch (this.state) {
        case M.DATA:
          this._stateData(e);
          break;
        case M.RCDATA:
          this._stateRcdata(e);
          break;
        case M.RAWTEXT:
          this._stateRawtext(e);
          break;
        case M.SCRIPT_DATA:
          this._stateScriptData(e);
          break;
        case M.PLAINTEXT:
          this._statePlaintext(e);
          break;
        case M.TAG_OPEN:
          this._stateTagOpen(e);
          break;
        case M.END_TAG_OPEN:
          this._stateEndTagOpen(e);
          break;
        case M.TAG_NAME:
          this._stateTagName(e);
          break;
        case M.RCDATA_LESS_THAN_SIGN:
          this._stateRcdataLessThanSign(e);
          break;
        case M.RCDATA_END_TAG_OPEN:
          this._stateRcdataEndTagOpen(e);
          break;
        case M.RCDATA_END_TAG_NAME:
          this._stateRcdataEndTagName(e);
          break;
        case M.RAWTEXT_LESS_THAN_SIGN:
          this._stateRawtextLessThanSign(e);
          break;
        case M.RAWTEXT_END_TAG_OPEN:
          this._stateRawtextEndTagOpen(e);
          break;
        case M.RAWTEXT_END_TAG_NAME:
          this._stateRawtextEndTagName(e);
          break;
        case M.SCRIPT_DATA_LESS_THAN_SIGN:
          this._stateScriptDataLessThanSign(e);
          break;
        case M.SCRIPT_DATA_END_TAG_OPEN:
          this._stateScriptDataEndTagOpen(e);
          break;
        case M.SCRIPT_DATA_END_TAG_NAME:
          this._stateScriptDataEndTagName(e);
          break;
        case M.SCRIPT_DATA_ESCAPE_START:
          this._stateScriptDataEscapeStart(e);
          break;
        case M.SCRIPT_DATA_ESCAPE_START_DASH:
          this._stateScriptDataEscapeStartDash(e);
          break;
        case M.SCRIPT_DATA_ESCAPED:
          this._stateScriptDataEscaped(e);
          break;
        case M.SCRIPT_DATA_ESCAPED_DASH:
          this._stateScriptDataEscapedDash(e);
          break;
        case M.SCRIPT_DATA_ESCAPED_DASH_DASH:
          this._stateScriptDataEscapedDashDash(e);
          break;
        case M.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
          this._stateScriptDataEscapedLessThanSign(e);
          break;
        case M.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
          this._stateScriptDataEscapedEndTagOpen(e);
          break;
        case M.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
          this._stateScriptDataEscapedEndTagName(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPE_START:
          this._stateScriptDataDoubleEscapeStart(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPED:
          this._stateScriptDataDoubleEscaped(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
          this._stateScriptDataDoubleEscapedDash(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
          this._stateScriptDataDoubleEscapedDashDash(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
          this._stateScriptDataDoubleEscapedLessThanSign(e);
          break;
        case M.SCRIPT_DATA_DOUBLE_ESCAPE_END:
          this._stateScriptDataDoubleEscapeEnd(e);
          break;
        case M.BEFORE_ATTRIBUTE_NAME:
          this._stateBeforeAttributeName(e);
          break;
        case M.ATTRIBUTE_NAME:
          this._stateAttributeName(e);
          break;
        case M.AFTER_ATTRIBUTE_NAME:
          this._stateAfterAttributeName(e);
          break;
        case M.BEFORE_ATTRIBUTE_VALUE:
          this._stateBeforeAttributeValue(e);
          break;
        case M.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
          this._stateAttributeValueDoubleQuoted(e);
          break;
        case M.ATTRIBUTE_VALUE_SINGLE_QUOTED:
          this._stateAttributeValueSingleQuoted(e);
          break;
        case M.ATTRIBUTE_VALUE_UNQUOTED:
          this._stateAttributeValueUnquoted(e);
          break;
        case M.AFTER_ATTRIBUTE_VALUE_QUOTED:
          this._stateAfterAttributeValueQuoted(e);
          break;
        case M.SELF_CLOSING_START_TAG:
          this._stateSelfClosingStartTag(e);
          break;
        case M.BOGUS_COMMENT:
          this._stateBogusComment(e);
          break;
        case M.MARKUP_DECLARATION_OPEN:
          this._stateMarkupDeclarationOpen(e);
          break;
        case M.COMMENT_START:
          this._stateCommentStart(e);
          break;
        case M.COMMENT_START_DASH:
          this._stateCommentStartDash(e);
          break;
        case M.COMMENT:
          this._stateComment(e);
          break;
        case M.COMMENT_LESS_THAN_SIGN:
          this._stateCommentLessThanSign(e);
          break;
        case M.COMMENT_LESS_THAN_SIGN_BANG:
          this._stateCommentLessThanSignBang(e);
          break;
        case M.COMMENT_LESS_THAN_SIGN_BANG_DASH:
          this._stateCommentLessThanSignBangDash(e);
          break;
        case M.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
          this._stateCommentLessThanSignBangDashDash(e);
          break;
        case M.COMMENT_END_DASH:
          this._stateCommentEndDash(e);
          break;
        case M.COMMENT_END:
          this._stateCommentEnd(e);
          break;
        case M.COMMENT_END_BANG:
          this._stateCommentEndBang(e);
          break;
        case M.DOCTYPE:
          this._stateDoctype(e);
          break;
        case M.BEFORE_DOCTYPE_NAME:
          this._stateBeforeDoctypeName(e);
          break;
        case M.DOCTYPE_NAME:
          this._stateDoctypeName(e);
          break;
        case M.AFTER_DOCTYPE_NAME:
          this._stateAfterDoctypeName(e);
          break;
        case M.AFTER_DOCTYPE_PUBLIC_KEYWORD:
          this._stateAfterDoctypePublicKeyword(e);
          break;
        case M.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
          this._stateBeforeDoctypePublicIdentifier(e);
          break;
        case M.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
          this._stateDoctypePublicIdentifierDoubleQuoted(e);
          break;
        case M.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
          this._stateDoctypePublicIdentifierSingleQuoted(e);
          break;
        case M.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
          this._stateAfterDoctypePublicIdentifier(e);
          break;
        case M.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
          this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
          break;
        case M.AFTER_DOCTYPE_SYSTEM_KEYWORD:
          this._stateAfterDoctypeSystemKeyword(e);
          break;
        case M.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
          this._stateBeforeDoctypeSystemIdentifier(e);
          break;
        case M.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
          this._stateDoctypeSystemIdentifierDoubleQuoted(e);
          break;
        case M.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
          this._stateDoctypeSystemIdentifierSingleQuoted(e);
          break;
        case M.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
          this._stateAfterDoctypeSystemIdentifier(e);
          break;
        case M.BOGUS_DOCTYPE:
          this._stateBogusDoctype(e);
          break;
        case M.CDATA_SECTION:
          this._stateCdataSection(e);
          break;
        case M.CDATA_SECTION_BRACKET:
          this._stateCdataSectionBracket(e);
          break;
        case M.CDATA_SECTION_END:
          this._stateCdataSectionEnd(e);
          break;
        case M.CHARACTER_REFERENCE:
          this._stateCharacterReference();
          break;
        case M.AMBIGUOUS_AMPERSAND:
          this._stateAmbiguousAmpersand(e);
          break;
        default:
          throw Error("Unknown state");
      }
    }
    _stateData(e) {
      switch (e) {
        case p.LESS_THAN_SIGN:
          this.state = M.TAG_OPEN;
          break;
        case p.AMPERSAND:
          this._startCharacterReference();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitCodePoint(e);
          break;
        case p.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateRcdata(e) {
      switch (e) {
        case p.AMPERSAND:
          this._startCharacterReference();
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.RCDATA_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateRawtext(e) {
      switch (e) {
        case p.LESS_THAN_SIGN:
          this.state = M.RAWTEXT_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateScriptData(e) {
      switch (e) {
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _statePlaintext(e) {
      switch (e) {
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateTagOpen(e) {
      if (es(e)) {
        this._createStartTagToken();
        this.state = M.TAG_NAME;
        this._stateTagName(e);
      } else {
        switch (e) {
          case p.EXCLAMATION_MARK:
            this.state = M.MARKUP_DECLARATION_OPEN;
            break;
          case p.SOLIDUS:
            this.state = M.END_TAG_OPEN;
            break;
          case p.QUESTION_MARK:
            this._err(N.unexpectedQuestionMarkInsteadOfTagName);
            this._createCommentToken(1);
            this.state = M.BOGUS_COMMENT;
            this._stateBogusComment(e);
            break;
          case p.EOF:
            this._err(N.eofBeforeTagName);
            this._emitChars("<");
            this._emitEOFToken();
            break;
          default:
            this._err(N.invalidFirstCharacterOfTagName);
            this._emitChars("<");
            this.state = M.DATA;
            this._stateData(e);
        }
      }
    }
    _stateEndTagOpen(e) {
      if (es(e)) {
        this._createEndTagToken();
        this.state = M.TAG_NAME;
        this._stateTagName(e);
      } else {
        switch (e) {
          case p.GREATER_THAN_SIGN:
            this._err(N.missingEndTagName);
            this.state = M.DATA;
            break;
          case p.EOF:
            this._err(N.eofBeforeTagName);
            this._emitChars("</");
            this._emitEOFToken();
            break;
          default:
            this._err(N.invalidFirstCharacterOfTagName);
            this._createCommentToken(2);
            this.state = M.BOGUS_COMMENT;
            this._stateBogusComment(e);
        }
      }
    }
    _stateTagName(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          break;
        case p.SOLIDUS:
          this.state = M.SELF_CLOSING_START_TAG;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.tagName += "�";
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          t.tagName += String.fromCodePoint(et(e) ? e + 32 : e);
      }
    }
    _stateRcdataLessThanSign(e) {
      if (e === p.SOLIDUS) {
        this.state = M.RCDATA_END_TAG_OPEN;
      } else {
        this._emitChars("<");
        this.state = M.RCDATA;
        this._stateRcdata(e);
      }
    }
    _stateRcdataEndTagOpen(e) {
      if (es(e)) {
        this.state = M.RCDATA_END_TAG_NAME;
        this._stateRcdataEndTagName(e);
      } else {
        this._emitChars("</");
        this.state = M.RCDATA;
        this._stateRcdata(e);
      }
    }
    handleSpecialEndTag(e) {
      if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
        return !this._ensureHibernation();
      }
      this._createEndTagToken();
      this.currentToken.tagName = this.lastStartTagName;
      switch (this.preprocessor.peek(this.lastStartTagName.length)) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this._advanceBy(this.lastStartTagName.length);
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          return false;
        case p.SOLIDUS:
          this._advanceBy(this.lastStartTagName.length);
          this.state = M.SELF_CLOSING_START_TAG;
          return false;
        case p.GREATER_THAN_SIGN:
          this._advanceBy(this.lastStartTagName.length);
          this.emitCurrentTagToken();
          this.state = M.DATA;
          return false;
        default:
          return !this._ensureHibernation();
      }
    }
    _stateRcdataEndTagName(e) {
      if (this.handleSpecialEndTag(e)) {
        this._emitChars("</");
        this.state = M.RCDATA;
        this._stateRcdata(e);
      }
    }
    _stateRawtextLessThanSign(e) {
      if (e === p.SOLIDUS) {
        this.state = M.RAWTEXT_END_TAG_OPEN;
      } else {
        this._emitChars("<");
        this.state = M.RAWTEXT;
        this._stateRawtext(e);
      }
    }
    _stateRawtextEndTagOpen(e) {
      if (es(e)) {
        this.state = M.RAWTEXT_END_TAG_NAME;
        this._stateRawtextEndTagName(e);
      } else {
        this._emitChars("</");
        this.state = M.RAWTEXT;
        this._stateRawtext(e);
      }
    }
    _stateRawtextEndTagName(e) {
      if (this.handleSpecialEndTag(e)) {
        this._emitChars("</");
        this.state = M.RAWTEXT;
        this._stateRawtext(e);
      }
    }
    _stateScriptDataLessThanSign(e) {
      switch (e) {
        case p.SOLIDUS:
          this.state = M.SCRIPT_DATA_END_TAG_OPEN;
          break;
        case p.EXCLAMATION_MARK:
          this.state = M.SCRIPT_DATA_ESCAPE_START;
          this._emitChars("<!");
          break;
        default:
          this._emitChars("<");
          this.state = M.SCRIPT_DATA;
          this._stateScriptData(e);
      }
    }
    _stateScriptDataEndTagOpen(e) {
      if (es(e)) {
        this.state = M.SCRIPT_DATA_END_TAG_NAME;
        this._stateScriptDataEndTagName(e);
      } else {
        this._emitChars("</");
        this.state = M.SCRIPT_DATA;
        this._stateScriptData(e);
      }
    }
    _stateScriptDataEndTagName(e) {
      if (this.handleSpecialEndTag(e)) {
        this._emitChars("</");
        this.state = M.SCRIPT_DATA;
        this._stateScriptData(e);
      }
    }
    _stateScriptDataEscapeStart(e) {
      if (e === p.HYPHEN_MINUS) {
        this.state = M.SCRIPT_DATA_ESCAPE_START_DASH;
        this._emitChars("-");
      } else {
        this.state = M.SCRIPT_DATA;
        this._stateScriptData(e);
      }
    }
    _stateScriptDataEscapeStartDash(e) {
      if (e === p.HYPHEN_MINUS) {
        this.state = M.SCRIPT_DATA_ESCAPED_DASH_DASH;
        this._emitChars("-");
      } else {
        this.state = M.SCRIPT_DATA;
        this._stateScriptData(e);
      }
    }
    _stateScriptDataEscaped(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.SCRIPT_DATA_ESCAPED_DASH;
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataEscapedDash(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.SCRIPT_DATA_ESCAPED_DASH_DASH;
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.state = M.SCRIPT_DATA_ESCAPED;
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this.state = M.SCRIPT_DATA_ESCAPED;
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataEscapedDashDash(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.SCRIPT_DATA;
          this._emitChars(">");
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.state = M.SCRIPT_DATA_ESCAPED;
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this.state = M.SCRIPT_DATA_ESCAPED;
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataEscapedLessThanSign(e) {
      if (e === p.SOLIDUS) {
        this.state = M.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
      } else if (es(e)) {
        this._emitChars("<");
        this.state = M.SCRIPT_DATA_DOUBLE_ESCAPE_START;
        this._stateScriptDataDoubleEscapeStart(e);
      } else {
        this._emitChars("<");
        this.state = M.SCRIPT_DATA_ESCAPED;
        this._stateScriptDataEscaped(e);
      }
    }
    _stateScriptDataEscapedEndTagOpen(e) {
      if (es(e)) {
        this.state = M.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
        this._stateScriptDataEscapedEndTagName(e);
      } else {
        this._emitChars("</");
        this.state = M.SCRIPT_DATA_ESCAPED;
        this._stateScriptDataEscaped(e);
      }
    }
    _stateScriptDataEscapedEndTagName(e) {
      if (this.handleSpecialEndTag(e)) {
        this._emitChars("</");
        this.state = M.SCRIPT_DATA_ESCAPED;
        this._stateScriptDataEscaped(e);
      }
    }
    _stateScriptDataDoubleEscapeStart(e) {
      if (this.preprocessor.startsWith(y.SCRIPT, false) && en(this.preprocessor.peek(y.SCRIPT.length))) {
        this._emitCodePoint(e);
        for (let e = 0; e < y.SCRIPT.length; e++) {
          this._emitCodePoint(this._consume());
        }
        this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
      } else if (!this._ensureHibernation()) {
        this.state = M.SCRIPT_DATA_ESCAPED;
        this._stateScriptDataEscaped(e);
      }
    }
    _stateScriptDataDoubleEscaped(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
          this._emitChars("<");
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataDoubleEscapedDash(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
          this._emitChars("<");
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataDoubleEscapedDashDash(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this._emitChars("-");
          break;
        case p.LESS_THAN_SIGN:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
          this._emitChars("<");
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.SCRIPT_DATA;
          this._emitChars(">");
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._emitChars("�");
          break;
        case p.EOF:
          this._err(N.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
          break;
        default:
          this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._emitCodePoint(e);
      }
    }
    _stateScriptDataDoubleEscapedLessThanSign(e) {
      if (e === p.SOLIDUS) {
        this.state = M.SCRIPT_DATA_DOUBLE_ESCAPE_END;
        this._emitChars("/");
      } else {
        this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._stateScriptDataDoubleEscaped(e);
      }
    }
    _stateScriptDataDoubleEscapeEnd(e) {
      if (this.preprocessor.startsWith(y.SCRIPT, false) && en(this.preprocessor.peek(y.SCRIPT.length))) {
        this._emitCodePoint(e);
        for (let e = 0; e < y.SCRIPT.length; e++) {
          this._emitCodePoint(this._consume());
        }
        this.state = M.SCRIPT_DATA_ESCAPED;
      } else if (!this._ensureHibernation()) {
        this.state = M.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._stateScriptDataDoubleEscaped(e);
      }
    }
    _stateBeforeAttributeName(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.SOLIDUS:
        case p.GREATER_THAN_SIGN:
        case p.EOF:
          this.state = M.AFTER_ATTRIBUTE_NAME;
          this._stateAfterAttributeName(e);
          break;
        case p.EQUALS_SIGN:
          this._err(N.unexpectedEqualsSignBeforeAttributeName);
          this._createAttr("=");
          this.state = M.ATTRIBUTE_NAME;
          break;
        default:
          this._createAttr("");
          this.state = M.ATTRIBUTE_NAME;
          this._stateAttributeName(e);
      }
    }
    _stateAttributeName(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
        case p.SOLIDUS:
        case p.GREATER_THAN_SIGN:
        case p.EOF:
          this._leaveAttrName();
          this.state = M.AFTER_ATTRIBUTE_NAME;
          this._stateAfterAttributeName(e);
          break;
        case p.EQUALS_SIGN:
          this._leaveAttrName();
          this.state = M.BEFORE_ATTRIBUTE_VALUE;
          break;
        case p.QUOTATION_MARK:
        case p.APOSTROPHE:
        case p.LESS_THAN_SIGN:
          this._err(N.unexpectedCharacterInAttributeName);
          this.currentAttr.name += String.fromCodePoint(e);
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.currentAttr.name += "�";
          break;
        default:
          this.currentAttr.name += String.fromCodePoint(et(e) ? e + 32 : e);
      }
    }
    _stateAfterAttributeName(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.SOLIDUS:
          this.state = M.SELF_CLOSING_START_TAG;
          break;
        case p.EQUALS_SIGN:
          this.state = M.BEFORE_ATTRIBUTE_VALUE;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this._createAttr("");
          this.state = M.ATTRIBUTE_NAME;
          this._stateAttributeName(e);
      }
    }
    _stateBeforeAttributeValue(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.QUOTATION_MARK:
          this.state = M.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          this.state = M.ATTRIBUTE_VALUE_SINGLE_QUOTED;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.missingAttributeValue);
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        default:
          this.state = M.ATTRIBUTE_VALUE_UNQUOTED;
          this._stateAttributeValueUnquoted(e);
      }
    }
    _stateAttributeValueDoubleQuoted(e) {
      switch (e) {
        case p.QUOTATION_MARK:
          this.state = M.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        case p.AMPERSAND:
          this._startCharacterReference();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.currentAttr.value += "�";
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e);
      }
    }
    _stateAttributeValueSingleQuoted(e) {
      switch (e) {
        case p.APOSTROPHE:
          this.state = M.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        case p.AMPERSAND:
          this._startCharacterReference();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.currentAttr.value += "�";
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e);
      }
    }
    _stateAttributeValueUnquoted(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this._leaveAttrValue();
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          break;
        case p.AMPERSAND:
          this._startCharacterReference();
          break;
        case p.GREATER_THAN_SIGN:
          this._leaveAttrValue();
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          this.currentAttr.value += "�";
          break;
        case p.QUOTATION_MARK:
        case p.APOSTROPHE:
        case p.LESS_THAN_SIGN:
        case p.EQUALS_SIGN:
        case p.GRAVE_ACCENT:
          this._err(N.unexpectedCharacterInUnquotedAttributeValue);
          this.currentAttr.value += String.fromCodePoint(e);
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e);
      }
    }
    _stateAfterAttributeValueQuoted(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this._leaveAttrValue();
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          break;
        case p.SOLIDUS:
          this._leaveAttrValue();
          this.state = M.SELF_CLOSING_START_TAG;
          break;
        case p.GREATER_THAN_SIGN:
          this._leaveAttrValue();
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingWhitespaceBetweenAttributes);
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          this._stateBeforeAttributeName(e);
      }
    }
    _stateSelfClosingStartTag(e) {
      switch (e) {
        case p.GREATER_THAN_SIGN:
          this.currentToken.selfClosing = true;
          this.state = M.DATA;
          this.emitCurrentTagToken();
          break;
        case p.EOF:
          this._err(N.eofInTag);
          this._emitEOFToken();
          break;
        default:
          this._err(N.unexpectedSolidusInTag);
          this.state = M.BEFORE_ATTRIBUTE_NAME;
          this._stateBeforeAttributeName(e);
      }
    }
    _stateBogusComment(e) {
      let t = this.currentToken;
      switch (e) {
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentComment(t);
          break;
        case p.EOF:
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.data += "�";
          break;
        default:
          t.data += String.fromCodePoint(e);
      }
    }
    _stateMarkupDeclarationOpen(e) {
      if (this._consumeSequenceIfMatch(y.DASH_DASH, true)) {
        this._createCommentToken(y.DASH_DASH.length + 1);
        this.state = M.COMMENT_START;
      } else if (this._consumeSequenceIfMatch(y.DOCTYPE, false)) {
        this.currentLocation = this.getCurrentLocation(y.DOCTYPE.length + 1);
        this.state = M.DOCTYPE;
      } else if (this._consumeSequenceIfMatch(y.CDATA_START, true)) {
        if (this.inForeignNode) {
          this.state = M.CDATA_SECTION;
        } else {
          this._err(N.cdataInHtmlContent);
          this._createCommentToken(y.CDATA_START.length + 1);
          this.currentToken.data = "[CDATA[";
          this.state = M.BOGUS_COMMENT;
        }
      } else if (!this._ensureHibernation()) {
        this._err(N.incorrectlyOpenedComment);
        this._createCommentToken(2);
        this.state = M.BOGUS_COMMENT;
        this._stateBogusComment(e);
      }
    }
    _stateCommentStart(e) {
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.COMMENT_START_DASH;
          break;
        case p.GREATER_THAN_SIGN:
          {
            this._err(N.abruptClosingOfEmptyComment);
            this.state = M.DATA;
            let e = this.currentToken;
            this.emitCurrentComment(e);
            break;
          }
        default:
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateCommentStartDash(e) {
      let t = this.currentToken;
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.COMMENT_END;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.abruptClosingOfEmptyComment);
          this.state = M.DATA;
          this.emitCurrentComment(t);
          break;
        case p.EOF:
          this._err(N.eofInComment);
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        default:
          t.data += "-";
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateComment(e) {
      let t = this.currentToken;
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.COMMENT_END_DASH;
          break;
        case p.LESS_THAN_SIGN:
          t.data += "<";
          this.state = M.COMMENT_LESS_THAN_SIGN;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.data += "�";
          break;
        case p.EOF:
          this._err(N.eofInComment);
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        default:
          t.data += String.fromCodePoint(e);
      }
    }
    _stateCommentLessThanSign(e) {
      let t = this.currentToken;
      switch (e) {
        case p.EXCLAMATION_MARK:
          t.data += "!";
          this.state = M.COMMENT_LESS_THAN_SIGN_BANG;
          break;
        case p.LESS_THAN_SIGN:
          t.data += "<";
          break;
        default:
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateCommentLessThanSignBang(e) {
      if (e === p.HYPHEN_MINUS) {
        this.state = M.COMMENT_LESS_THAN_SIGN_BANG_DASH;
      } else {
        this.state = M.COMMENT;
        this._stateComment(e);
      }
    }
    _stateCommentLessThanSignBangDash(e) {
      if (e === p.HYPHEN_MINUS) {
        this.state = M.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
      } else {
        this.state = M.COMMENT_END_DASH;
        this._stateCommentEndDash(e);
      }
    }
    _stateCommentLessThanSignBangDashDash(e) {
      if (e !== p.GREATER_THAN_SIGN && e !== p.EOF) {
        this._err(N.nestedComment);
      }
      this.state = M.COMMENT_END;
      this._stateCommentEnd(e);
    }
    _stateCommentEndDash(e) {
      let t = this.currentToken;
      switch (e) {
        case p.HYPHEN_MINUS:
          this.state = M.COMMENT_END;
          break;
        case p.EOF:
          this._err(N.eofInComment);
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        default:
          t.data += "-";
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateCommentEnd(e) {
      let t = this.currentToken;
      switch (e) {
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentComment(t);
          break;
        case p.EXCLAMATION_MARK:
          this.state = M.COMMENT_END_BANG;
          break;
        case p.HYPHEN_MINUS:
          t.data += "-";
          break;
        case p.EOF:
          this._err(N.eofInComment);
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        default:
          t.data += "--";
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateCommentEndBang(e) {
      let t = this.currentToken;
      switch (e) {
        case p.HYPHEN_MINUS:
          t.data += "--!";
          this.state = M.COMMENT_END_DASH;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.incorrectlyClosedComment);
          this.state = M.DATA;
          this.emitCurrentComment(t);
          break;
        case p.EOF:
          this._err(N.eofInComment);
          this.emitCurrentComment(t);
          this._emitEOFToken();
          break;
        default:
          t.data += "--!";
          this.state = M.COMMENT;
          this._stateComment(e);
      }
    }
    _stateDoctype(e) {
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.BEFORE_DOCTYPE_NAME;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.BEFORE_DOCTYPE_NAME;
          this._stateBeforeDoctypeName(e);
          break;
        case p.EOF:
          {
            this._err(N.eofInDoctype);
            this._createDoctypeToken(null);
            let e = this.currentToken;
            e.forceQuirks = true;
            this.emitCurrentDoctype(e);
            this._emitEOFToken();
            break;
          }
        default:
          this._err(N.missingWhitespaceBeforeDoctypeName);
          this.state = M.BEFORE_DOCTYPE_NAME;
          this._stateBeforeDoctypeName(e);
      }
    }
    _stateBeforeDoctypeName(e) {
      if (et(e)) {
        this._createDoctypeToken(String.fromCharCode(e + 32));
        this.state = M.DOCTYPE_NAME;
      } else {
        switch (e) {
          case p.SPACE:
          case p.LINE_FEED:
          case p.TABULATION:
          case p.FORM_FEED:
            break;
          case p.NULL:
            this._err(N.unexpectedNullCharacter);
            this._createDoctypeToken("�");
            this.state = M.DOCTYPE_NAME;
            break;
          case p.GREATER_THAN_SIGN:
            {
              this._err(N.missingDoctypeName);
              this._createDoctypeToken(null);
              let e = this.currentToken;
              e.forceQuirks = true;
              this.emitCurrentDoctype(e);
              this.state = M.DATA;
              break;
            }
          case p.EOF:
            {
              this._err(N.eofInDoctype);
              this._createDoctypeToken(null);
              let e = this.currentToken;
              e.forceQuirks = true;
              this.emitCurrentDoctype(e);
              this._emitEOFToken();
              break;
            }
          default:
            this._createDoctypeToken(String.fromCodePoint(e));
            this.state = M.DOCTYPE_NAME;
        }
      }
    }
    _stateDoctypeName(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.AFTER_DOCTYPE_NAME;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.name += "�";
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          t.name += String.fromCodePoint(et(e) ? e + 32 : e);
      }
    }
    _stateAfterDoctypeName(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          if (this._consumeSequenceIfMatch(y.PUBLIC, false)) {
            this.state = M.AFTER_DOCTYPE_PUBLIC_KEYWORD;
          } else if (this._consumeSequenceIfMatch(y.SYSTEM, false)) {
            this.state = M.AFTER_DOCTYPE_SYSTEM_KEYWORD;
          } else if (!this._ensureHibernation()) {
            this._err(N.invalidCharacterSequenceAfterDoctypeName);
            t.forceQuirks = true;
            this.state = M.BOGUS_DOCTYPE;
            this._stateBogusDoctype(e);
          }
      }
    }
    _stateAfterDoctypePublicKeyword(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case p.QUOTATION_MARK:
          this._err(N.missingWhitespaceAfterDoctypePublicKeyword);
          t.publicId = "";
          this.state = M.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          this._err(N.missingWhitespaceAfterDoctypePublicKeyword);
          t.publicId = "";
          this.state = M.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.missingDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateBeforeDoctypePublicIdentifier(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.QUOTATION_MARK:
          t.publicId = "";
          this.state = M.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          t.publicId = "";
          this.state = M.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.missingDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(e) {
      let t = this.currentToken;
      switch (e) {
        case p.QUOTATION_MARK:
          this.state = M.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.publicId += "�";
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.abruptDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          t.publicId += String.fromCodePoint(e);
      }
    }
    _stateDoctypePublicIdentifierSingleQuoted(e) {
      let t = this.currentToken;
      switch (e) {
        case p.APOSTROPHE:
          this.state = M.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.publicId += "�";
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.abruptDoctypePublicIdentifier);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          t.publicId += String.fromCodePoint(e);
      }
    }
    _stateAfterDoctypePublicIdentifier(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
          break;
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.QUOTATION_MARK:
          this._err(N.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          this._err(N.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.QUOTATION_MARK:
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateAfterDoctypeSystemKeyword(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          this.state = M.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case p.QUOTATION_MARK:
          this._err(N.missingWhitespaceAfterDoctypeSystemKeyword);
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          this._err(N.missingWhitespaceAfterDoctypeSystemKeyword);
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.missingDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateBeforeDoctypeSystemIdentifier(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.QUOTATION_MARK:
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case p.APOSTROPHE:
          t.systemId = "";
          this.state = M.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.missingDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.DATA;
          this.emitCurrentDoctype(t);
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.missingQuoteBeforeDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(e) {
      let t = this.currentToken;
      switch (e) {
        case p.QUOTATION_MARK:
          this.state = M.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.systemId += "�";
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.abruptDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          t.systemId += String.fromCodePoint(e);
      }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(e) {
      let t = this.currentToken;
      switch (e) {
        case p.APOSTROPHE:
          this.state = M.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          t.systemId += "�";
          break;
        case p.GREATER_THAN_SIGN:
          this._err(N.abruptDoctypeSystemIdentifier);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          t.systemId += String.fromCodePoint(e);
      }
    }
    _stateAfterDoctypeSystemIdentifier(e) {
      let t = this.currentToken;
      switch (e) {
        case p.SPACE:
        case p.LINE_FEED:
        case p.TABULATION:
        case p.FORM_FEED:
          break;
        case p.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.EOF:
          this._err(N.eofInDoctype);
          t.forceQuirks = true;
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
          break;
        default:
          this._err(N.unexpectedCharacterAfterDoctypeSystemIdentifier);
          this.state = M.BOGUS_DOCTYPE;
          this._stateBogusDoctype(e);
      }
    }
    _stateBogusDoctype(e) {
      let t = this.currentToken;
      switch (e) {
        case p.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t);
          this.state = M.DATA;
          break;
        case p.NULL:
          this._err(N.unexpectedNullCharacter);
          break;
        case p.EOF:
          this.emitCurrentDoctype(t);
          this._emitEOFToken();
      }
    }
    _stateCdataSection(e) {
      switch (e) {
        case p.RIGHT_SQUARE_BRACKET:
          this.state = M.CDATA_SECTION_BRACKET;
          break;
        case p.EOF:
          this._err(N.eofInCdata);
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e);
      }
    }
    _stateCdataSectionBracket(e) {
      if (e === p.RIGHT_SQUARE_BRACKET) {
        this.state = M.CDATA_SECTION_END;
      } else {
        this._emitChars("]");
        this.state = M.CDATA_SECTION;
        this._stateCdataSection(e);
      }
    }
    _stateCdataSectionEnd(e) {
      switch (e) {
        case p.GREATER_THAN_SIGN:
          this.state = M.DATA;
          break;
        case p.RIGHT_SQUARE_BRACKET:
          this._emitChars("]");
          break;
        default:
          this._emitChars("]]");
          this.state = M.CDATA_SECTION;
          this._stateCdataSection(e);
      }
    }
    _stateCharacterReference() {
      let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
      if (e < 0) {
        if (this.preprocessor.lastChunkWritten) {
          e = this.entityDecoder.end();
        } else {
          this.active = false;
          this.preprocessor.pos = this.preprocessor.html.length - 1;
          this.consumedAfterSnapshot = 0;
          this.preprocessor.endOfChunkHit = true;
          return;
        }
      }
      if (e === 0) {
        this.preprocessor.pos = this.entityStartPos;
        this._flushCodePointConsumedAsCharacterReference(p.AMPERSAND);
        this.state = !this._isCharacterReferenceInAttribute() && ea(this.preprocessor.peek(1)) ? M.AMBIGUOUS_AMPERSAND : this.returnState;
      } else {
        this.state = this.returnState;
      }
    }
    _stateAmbiguousAmpersand(e) {
      if (ea(e)) {
        this._flushCodePointConsumedAsCharacterReference(e);
      } else {
        if (e === p.SEMICOLON) {
          this._err(N.unknownNamedCharacterReference);
        }
        this.state = this.returnState;
        this._callState(e);
      }
    }
  }
  let eo = new Set([P.DD, P.DT, P.LI, P.OPTGROUP, P.OPTION, P.P, P.RB, P.RP, P.RT, P.RTC]);
  let ec = new Set([...eo, P.CAPTION, P.COLGROUP, P.TBODY, P.TD, P.TFOOT, P.TH, P.THEAD, P.TR]);
  let eE = new Set([P.APPLET, P.CAPTION, P.HTML, P.MARQUEE, P.OBJECT, P.TABLE, P.TD, P.TEMPLATE, P.TH]);
  let eT = new Set([...eE, P.OL, P.UL]);
  let eh = new Set([...eE, P.BUTTON]);
  let el = new Set([P.ANNOTATION_XML, P.MI, P.MN, P.MO, P.MS, P.MTEXT]);
  let e_ = new Set([P.DESC, P.FOREIGN_OBJECT, P.TITLE]);
  let eA = new Set([P.TR, P.TEMPLATE, P.HTML]);
  let ed = new Set([P.TBODY, P.TFOOT, P.THEAD, P.TEMPLATE, P.HTML]);
  let eu = new Set([P.TABLE, P.TEMPLATE, P.HTML]);
  let em = new Set([P.TD, P.TH]);
  class ep {
    get currentTmplContentOrNode() {
      if (this._isInTemplate()) {
        return this.treeAdapter.getTemplateContent(this.current);
      } else {
        return this.current;
      }
    }
    constructor(e, t, s) {
      this.treeAdapter = t;
      this.handler = s;
      this.items = [];
      this.tagIDs = [];
      this.stackTop = -1;
      this.tmplCount = 0;
      this.currentTagId = P.UNKNOWN;
      this.current = e;
    }
    _indexOf(e) {
      return this.items.lastIndexOf(e, this.stackTop);
    }
    _isInTemplate() {
      return this.currentTagId === P.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === L.HTML;
    }
    _updateCurrentElement() {
      this.current = this.items[this.stackTop];
      this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(e, t) {
      this.stackTop++;
      this.items[this.stackTop] = e;
      this.current = e;
      this.tagIDs[this.stackTop] = t;
      this.currentTagId = t;
      if (this._isInTemplate()) {
        this.tmplCount++;
      }
      this.handler.onItemPush(e, t, true);
    }
    pop() {
      let e = this.current;
      if (this.tmplCount > 0 && this._isInTemplate()) {
        this.tmplCount--;
      }
      this.stackTop--;
      this._updateCurrentElement();
      this.handler.onItemPop(e, true);
    }
    replace(e, t) {
      let s = this._indexOf(e);
      this.items[s] = t;
      if (s === this.stackTop) {
        this.current = t;
      }
    }
    insertAfter(e, t, s) {
      let a = this._indexOf(e) + 1;
      this.items.splice(a, 0, t);
      this.tagIDs.splice(a, 0, s);
      this.stackTop++;
      if (a === this.stackTop) {
        this._updateCurrentElement();
      }
      if (this.current && this.currentTagId !== undefined) {
        this.handler.onItemPush(this.current, this.currentTagId, a === this.stackTop);
      }
    }
    popUntilTagNamePopped(e) {
      let t = this.stackTop + 1;
      do {
        t = this.tagIDs.lastIndexOf(e, t - 1);
      } while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== L.HTML);
      this.shortenToLength(Math.max(t, 0));
    }
    shortenToLength(e) {
      while (this.stackTop >= e) {
        let t = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount -= 1;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(t, this.stackTop < e);
      }
    }
    popUntilElementPopped(e) {
      let t = this._indexOf(e);
      this.shortenToLength(Math.max(t, 0));
    }
    popUntilPopped(e, t) {
      let s = this._indexOfTagNames(e, t);
      this.shortenToLength(Math.max(s, 0));
    }
    popUntilNumberedHeaderPopped() {
      this.popUntilPopped(j, L.HTML);
    }
    popUntilTableCellPopped() {
      this.popUntilPopped(em, L.HTML);
    }
    popAllUpToHtmlElement() {
      this.tmplCount = 0;
      this.shortenToLength(1);
    }
    _indexOfTagNames(e, t) {
      for (let s = this.stackTop; s >= 0; s--) {
        if (e.has(this.tagIDs[s]) && this.treeAdapter.getNamespaceURI(this.items[s]) === t) {
          return s;
        }
      }
      return -1;
    }
    clearBackTo(e, t) {
      let s = this._indexOfTagNames(e, t);
      this.shortenToLength(s + 1);
    }
    clearBackToTableContext() {
      this.clearBackTo(eu, L.HTML);
    }
    clearBackToTableBodyContext() {
      this.clearBackTo(ed, L.HTML);
    }
    clearBackToTableRowContext() {
      this.clearBackTo(eA, L.HTML);
    }
    remove(e) {
      let t = this._indexOf(e);
      if (t >= 0) {
        if (t === this.stackTop) {
          this.pop();
        } else {
          this.items.splice(t, 1);
          this.tagIDs.splice(t, 1);
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(e, false);
        }
      }
    }
    tryPeekProperlyNestedBodyElement() {
      if (this.stackTop >= 1 && this.tagIDs[1] === P.BODY) {
        return this.items[1];
      } else {
        return null;
      }
    }
    contains(e) {
      return this._indexOf(e) > -1;
    }
    getCommonAncestor(e) {
      let t = this._indexOf(e) - 1;
      if (t >= 0) {
        return this.items[t];
      } else {
        return null;
      }
    }
    isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.tagIDs[0] === P.HTML;
    }
    hasInDynamicScope(e, t) {
      for (let s = this.stackTop; s >= 0; s--) {
        let a = this.tagIDs[s];
        switch (this.treeAdapter.getNamespaceURI(this.items[s])) {
          case L.HTML:
            if (a === e) {
              return true;
            }
            if (t.has(a)) {
              return false;
            }
            break;
          case L.SVG:
            if (e_.has(a)) {
              return false;
            }
            break;
          case L.MATHML:
            if (el.has(a)) {
              return false;
            }
        }
      }
      return true;
    }
    hasInScope(e) {
      return this.hasInDynamicScope(e, eE);
    }
    hasInListItemScope(e) {
      return this.hasInDynamicScope(e, eT);
    }
    hasInButtonScope(e) {
      return this.hasInDynamicScope(e, eh);
    }
    hasNumberedHeaderInScope() {
      for (let e = this.stackTop; e >= 0; e--) {
        let t = this.tagIDs[e];
        switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
          case L.HTML:
            if (j.has(t)) {
              return true;
            }
            if (eE.has(t)) {
              return false;
            }
            break;
          case L.SVG:
            if (e_.has(t)) {
              return false;
            }
            break;
          case L.MATHML:
            if (el.has(t)) {
              return false;
            }
        }
      }
      return true;
    }
    hasInTableScope(e) {
      for (let t = this.stackTop; t >= 0; t--) {
        if (this.treeAdapter.getNamespaceURI(this.items[t]) === L.HTML) {
          switch (this.tagIDs[t]) {
            case e:
              return true;
            case P.TABLE:
            case P.HTML:
              return false;
          }
        }
      }
      return true;
    }
    hasTableBodyContextInTableScope() {
      for (let e = this.stackTop; e >= 0; e--) {
        if (this.treeAdapter.getNamespaceURI(this.items[e]) === L.HTML) {
          switch (this.tagIDs[e]) {
            case P.TBODY:
            case P.THEAD:
            case P.TFOOT:
              return true;
            case P.TABLE:
            case P.HTML:
              return false;
          }
        }
      }
      return true;
    }
    hasInSelectScope(e) {
      for (let t = this.stackTop; t >= 0; t--) {
        if (this.treeAdapter.getNamespaceURI(this.items[t]) === L.HTML) {
          switch (this.tagIDs[t]) {
            case e:
              return true;
            case P.OPTION:
            case P.OPTGROUP:
              break;
            default:
              return false;
          }
        }
      }
      return true;
    }
    generateImpliedEndTags() {
      while (this.currentTagId !== undefined && eo.has(this.currentTagId)) {
        this.pop();
      }
    }
    generateImpliedEndTagsThoroughly() {
      while (this.currentTagId !== undefined && ec.has(this.currentTagId)) {
        this.pop();
      }
    }
    generateImpliedEndTagsWithExclusion(e) {
      while (this.currentTagId !== undefined && this.currentTagId !== e && ec.has(this.currentTagId)) {
        this.pop();
      }
    }
  }
  (u = b ||= {})[u.Marker = 0] = "Marker";
  u[u.Element = 1] = "Element";
  let eN = {
    type: b.Marker
  };
  class eI {
    constructor(e) {
      this.treeAdapter = e;
      this.entries = [];
      this.bookmark = null;
    }
    _getNoahArkConditionCandidates(e, t) {
      let s = [];
      let a = t.length;
      let r = this.treeAdapter.getTagName(e);
      let n = this.treeAdapter.getNamespaceURI(e);
      for (let e = 0; e < this.entries.length; e++) {
        let t = this.entries[e];
        if (t.type === b.Marker) {
          break;
        }
        let {
          element: i
        } = t;
        if (this.treeAdapter.getTagName(i) === r && this.treeAdapter.getNamespaceURI(i) === n) {
          let t = this.treeAdapter.getAttrList(i);
          if (t.length === a) {
            s.push({
              idx: e,
              attrs: t
            });
          }
        }
      }
      return s;
    }
    _ensureNoahArkCondition(e) {
      if (this.entries.length < 3) {
        return;
      }
      let t = this.treeAdapter.getAttrList(e);
      let s = this._getNoahArkConditionCandidates(e, t);
      if (s.length < 3) {
        return;
      }
      let a = new Map(t.map(e => [e.name, e.value]));
      let r = 0;
      for (let e = 0; e < s.length; e++) {
        let t = s[e];
        if (t.attrs.every(e => a.get(e.name) === e.value) && (r += 1) >= 3) {
          this.entries.splice(t.idx, 1);
        }
      }
    }
    insertMarker() {
      this.entries.unshift(eN);
    }
    pushElement(e, t) {
      this._ensureNoahArkCondition(e);
      this.entries.unshift({
        type: b.Element,
        element: e,
        token: t
      });
    }
    insertElementAfterBookmark(e, t) {
      let s = this.entries.indexOf(this.bookmark);
      this.entries.splice(s, 0, {
        type: b.Element,
        element: e,
        token: t
      });
    }
    removeEntry(e) {
      let t = this.entries.indexOf(e);
      if (t !== -1) {
        this.entries.splice(t, 1);
      }
    }
    clearToLastMarker() {
      let e = this.entries.indexOf(eN);
      if (e === -1) {
        this.entries.length = 0;
      } else {
        this.entries.splice(0, e + 1);
      }
    }
    getElementEntryInScopeWithTagName(e) {
      let t = this.entries.find(t => t.type === b.Marker || this.treeAdapter.getTagName(t.element) === e);
      if (t && t.type === b.Element) {
        return t;
      } else {
        return null;
      }
    }
    getElementEntry(e) {
      return this.entries.find(t => t.type === b.Element && t.element === e);
    }
  }
  let eS = {
    createDocument: () => ({
      nodeName: "#document",
      mode: g.NO_QUIRKS,
      childNodes: []
    }),
    createDocumentFragment: () => ({
      nodeName: "#document-fragment",
      childNodes: []
    }),
    createElement: (e, t, s) => ({
      nodeName: e,
      tagName: e,
      attrs: s,
      namespaceURI: t,
      childNodes: [],
      parentNode: null
    }),
    createCommentNode: e => ({
      nodeName: "#comment",
      data: e,
      parentNode: null
    }),
    createTextNode: e => ({
      nodeName: "#text",
      value: e,
      parentNode: null
    }),
    appendChild(e, t) {
      e.childNodes.push(t);
      t.parentNode = e;
    },
    insertBefore(e, t, s) {
      let a = e.childNodes.indexOf(s);
      e.childNodes.splice(a, 0, t);
      t.parentNode = e;
    },
    setTemplateContent(e, t) {
      e.content = t;
    },
    getTemplateContent: e => e.content,
    setDocumentType(e, t, s, a) {
      let r = e.childNodes.find(e => e.nodeName === "#documentType");
      if (r) {
        r.name = t;
        r.publicId = s;
        r.systemId = a;
      } else {
        eS.appendChild(e, {
          nodeName: "#documentType",
          name: t,
          publicId: s,
          systemId: a,
          parentNode: null
        });
      }
    },
    setDocumentMode(e, t) {
      e.mode = t;
    },
    getDocumentMode: e => e.mode,
    detachNode(e) {
      if (e.parentNode) {
        let t = e.parentNode.childNodes.indexOf(e);
        e.parentNode.childNodes.splice(t, 1);
        e.parentNode = null;
      }
    },
    insertText(e, t) {
      if (e.childNodes.length > 0) {
        let s = e.childNodes[e.childNodes.length - 1];
        if (eS.isTextNode(s)) {
          s.value += t;
          return;
        }
      }
      eS.appendChild(e, eS.createTextNode(t));
    },
    insertTextBefore(e, t, s) {
      let a = e.childNodes[e.childNodes.indexOf(s) - 1];
      if (a && eS.isTextNode(a)) {
        a.value += t;
      } else {
        eS.insertBefore(e, eS.createTextNode(t), s);
      }
    },
    adoptAttributes(e, t) {
      let s = new Set(e.attrs.map(e => e.name));
      for (let a = 0; a < t.length; a++) {
        if (!s.has(t[a].name)) {
          e.attrs.push(t[a]);
        }
      }
    },
    getFirstChild: e => e.childNodes[0],
    getChildNodes: e => e.childNodes,
    getParentNode: e => e.parentNode,
    getAttrList: e => e.attrs,
    getTagName: e => e.tagName,
    getNamespaceURI: e => e.namespaceURI,
    getTextNodeContent: e => e.value,
    getCommentNodeContent: e => e.data,
    getDocumentTypeNodeName: e => e.name,
    getDocumentTypeNodePublicId: e => e.publicId,
    getDocumentTypeNodeSystemId: e => e.systemId,
    isTextNode: e => e.nodeName === "#text",
    isCommentNode: e => e.nodeName === "#comment",
    isDocumentTypeNode: e => e.nodeName === "#documentType",
    isElementNode: e => Object.prototype.hasOwnProperty.call(e, "tagName"),
    setNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation: e => e.sourceCodeLocation,
    updateNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = {
        ...e.sourceCodeLocation,
        ...t
      };
    }
  };
  let eC = "html";
  let eD = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"];
  let eO = [...eD, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];
  let eR = new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]);
  let eL = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
  let ef = [...eL, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];
  function eg(e, t) {
    return t.some(t => e.startsWith(t));
  }
  let ek = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
  };
  let eP = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(e => [e.toLowerCase(), e]));
  let eM = new Map([["xlink:actuate", {
    prefix: "xlink",
    name: "actuate",
    namespace: L.XLINK
  }], ["xlink:arcrole", {
    prefix: "xlink",
    name: "arcrole",
    namespace: L.XLINK
  }], ["xlink:href", {
    prefix: "xlink",
    name: "href",
    namespace: L.XLINK
  }], ["xlink:role", {
    prefix: "xlink",
    name: "role",
    namespace: L.XLINK
  }], ["xlink:show", {
    prefix: "xlink",
    name: "show",
    namespace: L.XLINK
  }], ["xlink:title", {
    prefix: "xlink",
    name: "title",
    namespace: L.XLINK
  }], ["xlink:type", {
    prefix: "xlink",
    name: "type",
    namespace: L.XLINK
  }], ["xml:lang", {
    prefix: "xml",
    name: "lang",
    namespace: L.XML
  }], ["xml:space", {
    prefix: "xml",
    name: "space",
    namespace: L.XML
  }], ["xmlns", {
    prefix: "",
    name: "xmlns",
    namespace: L.XMLNS
  }], ["xmlns:xlink", {
    prefix: "xmlns",
    name: "xlink",
    namespace: L.XMLNS
  }]]);
  let eb = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(e => [e.toLowerCase(), e]));
  let eB = new Set([P.B, P.BIG, P.BLOCKQUOTE, P.BODY, P.BR, P.CENTER, P.CODE, P.DD, P.DIV, P.DL, P.DT, P.EM, P.EMBED, P.H1, P.H2, P.H3, P.H4, P.H5, P.H6, P.HEAD, P.HR, P.I, P.IMG, P.LI, P.LISTING, P.MENU, P.META, P.NOBR, P.OL, P.P, P.PRE, P.RUBY, P.S, P.SMALL, P.SPAN, P.STRONG, P.STRIKE, P.SUB, P.SUP, P.TABLE, P.TT, P.U, P.UL, P.VAR]);
  function eH(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      if (e.attrs[t].name === "definitionurl") {
        e.attrs[t].name = "definitionURL";
        break;
      }
    }
  }
  function eU(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      let s = eP.get(e.attrs[t].name);
      if (s != null) {
        e.attrs[t].name = s;
      }
    }
  }
  function eF(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      let s = eM.get(e.attrs[t].name);
      if (s) {
        e.attrs[t].prefix = s.prefix;
        e.attrs[t].name = s.name;
        e.attrs[t].namespace = s.namespace;
      }
    }
  }
  (m = B ||= {})[m.INITIAL = 0] = "INITIAL";
  m[m.BEFORE_HTML = 1] = "BEFORE_HTML";
  m[m.BEFORE_HEAD = 2] = "BEFORE_HEAD";
  m[m.IN_HEAD = 3] = "IN_HEAD";
  m[m.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT";
  m[m.AFTER_HEAD = 5] = "AFTER_HEAD";
  m[m.IN_BODY = 6] = "IN_BODY";
  m[m.TEXT = 7] = "TEXT";
  m[m.IN_TABLE = 8] = "IN_TABLE";
  m[m.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT";
  m[m.IN_CAPTION = 10] = "IN_CAPTION";
  m[m.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP";
  m[m.IN_TABLE_BODY = 12] = "IN_TABLE_BODY";
  m[m.IN_ROW = 13] = "IN_ROW";
  m[m.IN_CELL = 14] = "IN_CELL";
  m[m.IN_SELECT = 15] = "IN_SELECT";
  m[m.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE";
  m[m.IN_TEMPLATE = 17] = "IN_TEMPLATE";
  m[m.AFTER_BODY = 18] = "AFTER_BODY";
  m[m.IN_FRAMESET = 19] = "IN_FRAMESET";
  m[m.AFTER_FRAMESET = 20] = "AFTER_FRAMESET";
  m[m.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY";
  m[m.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
  let ey = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
  };
  let eG = new Set([P.TABLE, P.TBODY, P.TFOOT, P.THEAD, P.TR]);
  let ew = {
    scriptingEnabled: true,
    sourceCodeLocationInfo: false,
    treeAdapter: eS,
    onParseError: null
  };
  class ex {
    constructor(e, t, s = null, a = null) {
      this.fragmentContext = s;
      this.scriptHandler = a;
      this.currentToken = null;
      this.stopped = false;
      this.insertionMode = B.INITIAL;
      this.originalInsertionMode = B.INITIAL;
      this.headElement = null;
      this.formElement = null;
      this.currentNotInHTML = false;
      this.tmplInsertionModeStack = [];
      this.pendingCharacterTokens = [];
      this.hasNonWhitespacePendingCharacterToken = false;
      this.framesetOk = true;
      this.skipNextNewLine = false;
      this.fosterParentingEnabled = false;
      this.options = {
        ...ew,
        ...e
      };
      this.treeAdapter = this.options.treeAdapter;
      this.onParseError = this.options.onParseError;
      if (this.onParseError) {
        this.options.sourceCodeLocationInfo = true;
      }
      this.document = t ?? this.treeAdapter.createDocument();
      this.tokenizer = new ei(this.options, this);
      this.activeFormattingElements = new eI(this.treeAdapter);
      this.fragmentContextID = s ? V(this.treeAdapter.getTagName(s)) : P.UNKNOWN;
      this._setContextModes(s ?? this.document, this.fragmentContextID);
      this.openElements = new ep(this.document, this.treeAdapter, this);
    }
    static parse(e, t) {
      let s = new this(t);
      s.tokenizer.write(e, true);
      return s.document;
    }
    static getFragmentParser(e, t) {
      let s = {
        ...ew,
        ...t
      };
      if (e == null) {
        e = s.treeAdapter.createElement(k.TEMPLATE, L.HTML, []);
      }
      let a = s.treeAdapter.createElement("documentmock", L.HTML, []);
      let r = new this(s, a, e);
      if (r.fragmentContextID === P.TEMPLATE) {
        r.tmplInsertionModeStack.unshift(B.IN_TEMPLATE);
      }
      r._initTokenizerForFragmentParsing();
      r._insertFakeRootElement();
      r._resetInsertionMode();
      r._findFormInFragmentContext();
      return r;
    }
    getFragment() {
      let e = this.treeAdapter.getFirstChild(this.document);
      let t = this.treeAdapter.createDocumentFragment();
      this._adoptNodes(e, t);
      return t;
    }
    _err(e, t, s) {
      if (!this.onParseError) {
        return;
      }
      let r = e.location ?? ey;
      let n = {
        code: t,
        startLine: r.startLine,
        startCol: r.startCol,
        startOffset: r.startOffset,
        endLine: s ? r.startLine : r.endLine,
        endCol: s ? r.startCol : r.endCol,
        endOffset: s ? r.startOffset : r.endOffset
      };
      this.onParseError(n);
    }
    onItemPush(e, t, s) {
      var a;
      var r;
      if ((r = (a = this.treeAdapter).onItemPush) !== null && r !== undefined) {
        r.call(a, e);
      }
      if (s && this.openElements.stackTop > 0) {
        this._setContextModes(e, t);
      }
    }
    onItemPop(e, t) {
      var s;
      var a;
      if (this.options.sourceCodeLocationInfo) {
        this._setEndLocation(e, this.currentToken);
      }
      if ((a = (s = this.treeAdapter).onItemPop) !== null && a !== undefined) {
        a.call(s, e, this.openElements.current);
      }
      if (t) {
        let e;
        let t;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
          e = this.fragmentContext;
          t = this.fragmentContextID;
        } else {
          ({
            current: e,
            currentTagId: t
          } = this.openElements);
        }
        this._setContextModes(e, t);
      }
    }
    _setContextModes(e, t) {
      let s = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === L.HTML;
      this.currentNotInHTML = !s;
      this.tokenizer.inForeignNode = !s && e !== undefined && t !== undefined && !this._isIntegrationPoint(t, e);
    }
    _switchToTextParsing(e, t) {
      this._insertElement(e, L.HTML);
      this.tokenizer.state = t;
      this.originalInsertionMode = this.insertionMode;
      this.insertionMode = B.TEXT;
    }
    switchToPlaintextParsing() {
      this.insertionMode = B.TEXT;
      this.originalInsertionMode = B.IN_BODY;
      this.tokenizer.state = ee.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
      if (this.openElements.stackTop === 0 && this.fragmentContext) {
        return this.fragmentContext;
      } else {
        return this.openElements.current;
      }
    }
    _findFormInFragmentContext() {
      let e = this.fragmentContext;
      while (e) {
        if (this.treeAdapter.getTagName(e) === k.FORM) {
          this.formElement = e;
          break;
        }
        e = this.treeAdapter.getParentNode(e);
      }
    }
    _initTokenizerForFragmentParsing() {
      if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === L.HTML) {
        switch (this.fragmentContextID) {
          case P.TITLE:
          case P.TEXTAREA:
            this.tokenizer.state = ee.RCDATA;
            break;
          case P.STYLE:
          case P.XMP:
          case P.IFRAME:
          case P.NOEMBED:
          case P.NOFRAMES:
          case P.NOSCRIPT:
            this.tokenizer.state = ee.RAWTEXT;
            break;
          case P.SCRIPT:
            this.tokenizer.state = ee.SCRIPT_DATA;
            break;
          case P.PLAINTEXT:
            this.tokenizer.state = ee.PLAINTEXT;
        }
      }
    }
    _setDocumentType(e) {
      let t = e.name || "";
      let s = e.publicId || "";
      let a = e.systemId || "";
      this.treeAdapter.setDocumentType(this.document, t, s, a);
      if (e.location) {
        let t = this.treeAdapter.getChildNodes(this.document).find(e => this.treeAdapter.isDocumentTypeNode(e));
        if (t) {
          this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
        }
      }
    }
    _attachElementToTree(e, t) {
      if (this.options.sourceCodeLocationInfo) {
        let s = t && {
          ...t,
          startTag: t
        };
        this.treeAdapter.setNodeSourceCodeLocation(e, s);
      }
      if (this._shouldFosterParentOnInsertion()) {
        this._fosterParentElement(e);
      } else {
        let t = this.openElements.currentTmplContentOrNode;
        this.treeAdapter.appendChild(t ?? this.document, e);
      }
    }
    _appendElement(e, t) {
      let s = this.treeAdapter.createElement(e.tagName, t, e.attrs);
      this._attachElementToTree(s, e.location);
    }
    _insertElement(e, t) {
      let s = this.treeAdapter.createElement(e.tagName, t, e.attrs);
      this._attachElementToTree(s, e.location);
      this.openElements.push(s, e.tagID);
    }
    _insertFakeElement(e, t) {
      let s = this.treeAdapter.createElement(e, L.HTML, []);
      this._attachElementToTree(s, null);
      this.openElements.push(s, t);
    }
    _insertTemplate(e) {
      let t = this.treeAdapter.createElement(e.tagName, L.HTML, e.attrs);
      let s = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(t, s);
      this._attachElementToTree(t, e.location);
      this.openElements.push(t, e.tagID);
      if (this.options.sourceCodeLocationInfo) {
        this.treeAdapter.setNodeSourceCodeLocation(s, null);
      }
    }
    _insertFakeRootElement() {
      let e = this.treeAdapter.createElement(k.HTML, L.HTML, []);
      if (this.options.sourceCodeLocationInfo) {
        this.treeAdapter.setNodeSourceCodeLocation(e, null);
      }
      this.treeAdapter.appendChild(this.openElements.current, e);
      this.openElements.push(e, P.HTML);
    }
    _appendCommentNode(e, t) {
      let s = this.treeAdapter.createCommentNode(e.data);
      this.treeAdapter.appendChild(t, s);
      if (this.options.sourceCodeLocationInfo) {
        this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
      }
    }
    _insertCharacters(e) {
      let t;
      let s;
      if (this._shouldFosterParentOnInsertion()) {
        ({
          parent: t,
          beforeElement: s
        } = this._findFosterParentingLocation());
        if (s) {
          this.treeAdapter.insertTextBefore(t, e.chars, s);
        } else {
          this.treeAdapter.insertText(t, e.chars);
        }
      } else {
        t = this.openElements.currentTmplContentOrNode;
        this.treeAdapter.insertText(t, e.chars);
      }
      if (!e.location) {
        return;
      }
      let a = this.treeAdapter.getChildNodes(t);
      let r = s ? a.lastIndexOf(s) : a.length;
      let n = a[r - 1];
      if (this.treeAdapter.getNodeSourceCodeLocation(n)) {
        let {
          endLine: t,
          endCol: s,
          endOffset: a
        } = e.location;
        this.treeAdapter.updateNodeSourceCodeLocation(n, {
          endLine: t,
          endCol: s,
          endOffset: a
        });
      } else if (this.options.sourceCodeLocationInfo) {
        this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
      }
    }
    _adoptNodes(e, t) {
      for (let s = this.treeAdapter.getFirstChild(e); s; s = this.treeAdapter.getFirstChild(e)) {
        this.treeAdapter.detachNode(s);
        this.treeAdapter.appendChild(t, s);
      }
    }
    _setEndLocation(e, t) {
      if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
        let s = t.location;
        let a = this.treeAdapter.getTagName(e);
        let r = t.type === I.END_TAG && a === t.tagName ? {
          endTag: {
            ...s
          },
          endLine: s.endLine,
          endCol: s.endCol,
          endOffset: s.endOffset
        } : {
          endLine: s.startLine,
          endCol: s.startCol,
          endOffset: s.startOffset
        };
        this.treeAdapter.updateNodeSourceCodeLocation(e, r);
      }
    }
    shouldProcessStartTagTokenInForeignContent(e) {
      let t;
      let s;
      return !!this.currentNotInHTML && (this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, s = this.fragmentContextID) : {
        current: t,
        currentTagId: s
      } = this.openElements, (e.tagID !== P.SVG || this.treeAdapter.getTagName(t) !== k.ANNOTATION_XML || this.treeAdapter.getNamespaceURI(t) !== L.MATHML) && (this.tokenizer.inForeignNode || (e.tagID === P.MGLYPH || e.tagID === P.MALIGNMARK) && s !== undefined && !this._isIntegrationPoint(s, t, L.HTML)));
    }
    _processToken(e) {
      switch (e.type) {
        case I.CHARACTER:
          this.onCharacter(e);
          break;
        case I.NULL_CHARACTER:
          this.onNullCharacter(e);
          break;
        case I.COMMENT:
          this.onComment(e);
          break;
        case I.DOCTYPE:
          this.onDoctype(e);
          break;
        case I.START_TAG:
          this._processStartTag(e);
          break;
        case I.END_TAG:
          this.onEndTag(e);
          break;
        case I.EOF:
          this.onEof(e);
          break;
        case I.WHITESPACE_CHARACTER:
          this.onWhitespaceCharacter(e);
      }
    }
    _isIntegrationPoint(e, t, s) {
      let a = this.treeAdapter.getNamespaceURI(t);
      let r = this.treeAdapter.getAttrList(t);
      return (!s || s === L.HTML) && function (e, t, s) {
        if (t === L.MATHML && e === P.ANNOTATION_XML) {
          for (let e = 0; e < s.length; e++) {
            if (s[e].name === f.ENCODING) {
              let t = s[e].value.toLowerCase();
              return t === ek.TEXT_HTML || t === ek.APPLICATION_XML;
            }
          }
        }
        return t === L.SVG && (e === P.FOREIGN_OBJECT || e === P.DESC || e === P.TITLE);
      }(e, a, r) || (!s || s === L.MATHML) && a === L.MATHML && (e === P.MI || e === P.MO || e === P.MN || e === P.MS || e === P.MTEXT);
    }
    _reconstructActiveFormattingElements() {
      let e = this.activeFormattingElements.entries.length;
      if (e) {
        let t = this.activeFormattingElements.entries.findIndex(e => e.type === b.Marker || this.openElements.contains(e.element));
        let s = t === -1 ? e - 1 : t - 1;
        for (let e = s; e >= 0; e--) {
          let t = this.activeFormattingElements.entries[e];
          this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element));
          t.element = this.openElements.current;
        }
      }
    }
    _closeTableCell() {
      this.openElements.generateImpliedEndTags();
      this.openElements.popUntilTableCellPopped();
      this.activeFormattingElements.clearToLastMarker();
      this.insertionMode = B.IN_ROW;
    }
    _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(P.P);
      this.openElements.popUntilTagNamePopped(P.P);
    }
    _resetInsertionMode() {
      for (let e = this.openElements.stackTop; e >= 0; e--) {
        switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
          case P.TR:
            this.insertionMode = B.IN_ROW;
            return;
          case P.TBODY:
          case P.THEAD:
          case P.TFOOT:
            this.insertionMode = B.IN_TABLE_BODY;
            return;
          case P.CAPTION:
            this.insertionMode = B.IN_CAPTION;
            return;
          case P.COLGROUP:
            this.insertionMode = B.IN_COLUMN_GROUP;
            return;
          case P.TABLE:
            this.insertionMode = B.IN_TABLE;
            return;
          case P.BODY:
            this.insertionMode = B.IN_BODY;
            return;
          case P.FRAMESET:
            this.insertionMode = B.IN_FRAMESET;
            return;
          case P.SELECT:
            this._resetInsertionModeForSelect(e);
            return;
          case P.TEMPLATE:
            this.insertionMode = this.tmplInsertionModeStack[0];
            return;
          case P.HTML:
            this.insertionMode = this.headElement ? B.AFTER_HEAD : B.BEFORE_HEAD;
            return;
          case P.TD:
          case P.TH:
            if (e > 0) {
              this.insertionMode = B.IN_CELL;
              return;
            }
            break;
          case P.HEAD:
            if (e > 0) {
              this.insertionMode = B.IN_HEAD;
              return;
            }
        }
      }
      this.insertionMode = B.IN_BODY;
    }
    _resetInsertionModeForSelect(e) {
      if (e > 0) {
        for (let t = e - 1; t > 0; t--) {
          let e = this.openElements.tagIDs[t];
          if (e === P.TEMPLATE) {
            break;
          }
          if (e === P.TABLE) {
            this.insertionMode = B.IN_SELECT_IN_TABLE;
            return;
          }
        }
      }
      this.insertionMode = B.IN_SELECT;
    }
    _isElementCausesFosterParenting(e) {
      return eG.has(e);
    }
    _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this.openElements.currentTagId !== undefined && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
      for (let e = this.openElements.stackTop; e >= 0; e--) {
        let t = this.openElements.items[e];
        switch (this.openElements.tagIDs[e]) {
          case P.TEMPLATE:
            if (this.treeAdapter.getNamespaceURI(t) === L.HTML) {
              return {
                parent: this.treeAdapter.getTemplateContent(t),
                beforeElement: null
              };
            }
            break;
          case P.TABLE:
            {
              let s = this.treeAdapter.getParentNode(t);
              if (s) {
                return {
                  parent: s,
                  beforeElement: t
                };
              }
              return {
                parent: this.openElements.items[e - 1],
                beforeElement: null
              };
            }
        }
      }
      return {
        parent: this.openElements.items[0],
        beforeElement: null
      };
    }
    _fosterParentElement(e) {
      let t = this._findFosterParentingLocation();
      if (t.beforeElement) {
        this.treeAdapter.insertBefore(t.parent, e, t.beforeElement);
      } else {
        this.treeAdapter.appendChild(t.parent, e);
      }
    }
    _isSpecialElement(e, t) {
      return J[this.treeAdapter.getNamespaceURI(e)].has(t);
    }
    onCharacter(e) {
      this.skipNextNewLine = false;
      if (this.tokenizer.inForeignNode) {
        var t;
        var s;
        t = this;
        s = e;
        t._insertCharacters(s);
        t.framesetOk = false;
        return;
      }
      switch (this.insertionMode) {
        case B.INITIAL:
          eq(this, e);
          break;
        case B.BEFORE_HTML:
          eW(this, e);
          break;
        case B.BEFORE_HEAD:
          eK(this, e);
          break;
        case B.IN_HEAD:
          ez(this, e);
          break;
        case B.IN_HEAD_NO_SCRIPT:
          eJ(this, e);
          break;
        case B.AFTER_HEAD:
          ej(this, e);
          break;
        case B.IN_BODY:
        case B.IN_CAPTION:
        case B.IN_CELL:
        case B.IN_TEMPLATE:
          e0(this, e);
          break;
        case B.TEXT:
        case B.IN_SELECT:
        case B.IN_SELECT_IN_TABLE:
          this._insertCharacters(e);
          break;
        case B.IN_TABLE:
        case B.IN_TABLE_BODY:
        case B.IN_ROW:
          e7(this, e);
          break;
        case B.IN_TABLE_TEXT:
          tr(this, e);
          break;
        case B.IN_COLUMN_GROUP:
          tc(this, e);
          break;
        case B.AFTER_BODY:
          tm(this, e);
          break;
        case B.AFTER_AFTER_BODY:
          tp(this, e);
      }
    }
    onNullCharacter(e) {
      this.skipNextNewLine = false;
      if (this.tokenizer.inForeignNode) {
        var t;
        var s;
        t = this;
        (s = e).chars = "�";
        t._insertCharacters(s);
        return;
      }
      switch (this.insertionMode) {
        case B.INITIAL:
          eq(this, e);
          break;
        case B.BEFORE_HTML:
          eW(this, e);
          break;
        case B.BEFORE_HEAD:
          eK(this, e);
          break;
        case B.IN_HEAD:
          ez(this, e);
          break;
        case B.IN_HEAD_NO_SCRIPT:
          eJ(this, e);
          break;
        case B.AFTER_HEAD:
          ej(this, e);
          break;
        case B.TEXT:
          this._insertCharacters(e);
          break;
        case B.IN_TABLE:
        case B.IN_TABLE_BODY:
        case B.IN_ROW:
          e7(this, e);
          break;
        case B.IN_COLUMN_GROUP:
          tc(this, e);
          break;
        case B.AFTER_BODY:
          tm(this, e);
          break;
        case B.AFTER_AFTER_BODY:
          tp(this, e);
      }
    }
    onComment(e) {
      this.skipNextNewLine = false;
      if (this.currentNotInHTML) {
        ev(this, e);
        return;
      }
      switch (this.insertionMode) {
        case B.INITIAL:
        case B.BEFORE_HTML:
        case B.BEFORE_HEAD:
        case B.IN_HEAD:
        case B.IN_HEAD_NO_SCRIPT:
        case B.AFTER_HEAD:
        case B.IN_BODY:
        case B.IN_TABLE:
        case B.IN_CAPTION:
        case B.IN_COLUMN_GROUP:
        case B.IN_TABLE_BODY:
        case B.IN_ROW:
        case B.IN_CELL:
        case B.IN_SELECT:
        case B.IN_SELECT_IN_TABLE:
        case B.IN_TEMPLATE:
        case B.IN_FRAMESET:
        case B.AFTER_FRAMESET:
          ev(this, e);
          break;
        case B.IN_TABLE_TEXT:
          tn(this, e);
          break;
        case B.AFTER_BODY:
          (function (e, t) {
            e._appendCommentNode(t, e.openElements.items[0]);
          })(this, e);
          break;
        case B.AFTER_AFTER_BODY:
        case B.AFTER_AFTER_FRAMESET:
          (function (e, t) {
            e._appendCommentNode(t, e.document);
          })(this, e);
      }
    }
    onDoctype(e) {
      this.skipNextNewLine = false;
      switch (this.insertionMode) {
        case B.INITIAL:
          (function (e, t) {
            e._setDocumentType(t);
            let s = t.forceQuirks ? g.QUIRKS : function (e) {
              if (e.name !== eC) {
                return g.QUIRKS;
              }
              let {
                systemId: t
              } = e;
              if (t && t.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") {
                return g.QUIRKS;
              }
              let {
                publicId: s
              } = e;
              if (s !== null) {
                s = s.toLowerCase();
                if (eR.has(s)) {
                  return g.QUIRKS;
                }
                let e = t === null ? eO : eD;
                if (eg(s, e)) {
                  return g.QUIRKS;
                }
                if (eg(s, e = t === null ? eL : ef)) {
                  return g.LIMITED_QUIRKS;
                }
              }
              return g.NO_QUIRKS;
            }(t);
            if (t.name !== eC || t.publicId !== null || t.systemId !== null && t.systemId !== "about:legacy-compat") {
              e._err(t, N.nonConformingDoctype);
            }
            e.treeAdapter.setDocumentMode(e.document, s);
            e.insertionMode = B.BEFORE_HTML;
          })(this, e);
          break;
        case B.BEFORE_HEAD:
        case B.IN_HEAD:
        case B.IN_HEAD_NO_SCRIPT:
        case B.AFTER_HEAD:
          this._err(e, N.misplacedDoctype);
          break;
        case B.IN_TABLE_TEXT:
          tn(this, e);
      }
    }
    onStartTag(e) {
      this.skipNextNewLine = false;
      this.currentToken = e;
      this._processStartTag(e);
      if (e.selfClosing && !e.ackSelfClosing) {
        this._err(e, N.nonVoidHtmlElementStartTagWithTrailingSolidus);
      }
    }
    _processStartTag(e) {
      if (this.shouldProcessStartTagTokenInForeignContent(e)) {
        (function (e, t) {
          if (function (e) {
            let t = e.tagID;
            return t === P.FONT && e.attrs.some(({
              name: e
            }) => e === f.COLOR || e === f.SIZE || e === f.FACE) || eB.has(t);
          }(t)) {
            tN(e);
            e._startTagOutsideForeignContent(t);
          } else {
            let s = e._getAdjustedCurrentElement();
            let a = e.treeAdapter.getNamespaceURI(s);
            if (a === L.MATHML) {
              eH(t);
            } else if (a === L.SVG) {
              (function (e) {
                let t = eb.get(e.tagName);
                if (t != null) {
                  e.tagName = t;
                  e.tagID = V(e.tagName);
                }
              })(t);
              eU(t);
            }
            eF(t);
            if (t.selfClosing) {
              e._appendElement(t, a);
            } else {
              e._insertElement(t, a);
            }
            t.ackSelfClosing = true;
          }
        })(this, e);
      } else {
        this._startTagOutsideForeignContent(e);
      }
    }
    _startTagOutsideForeignContent(e) {
      var t;
      var s;
      var a;
      var r;
      var n;
      var i;
      switch (this.insertionMode) {
        case B.INITIAL:
          eq(this, e);
          break;
        case B.BEFORE_HTML:
          t = this;
          if ((s = e).tagID === P.HTML) {
            t._insertElement(s, L.HTML);
            t.insertionMode = B.BEFORE_HEAD;
          } else {
            eW(t, s);
          }
          break;
        case B.BEFORE_HEAD:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.HEAD:
                e._insertElement(t, L.HTML);
                e.headElement = e.openElements.current;
                e.insertionMode = B.IN_HEAD;
                break;
              default:
                eK(e, t);
            }
          })(this, e);
          break;
        case B.IN_HEAD:
          eX(this, e);
          break;
        case B.IN_HEAD_NO_SCRIPT:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.BASEFONT:
              case P.BGSOUND:
              case P.HEAD:
              case P.LINK:
              case P.META:
              case P.NOFRAMES:
              case P.STYLE:
                eX(e, t);
                break;
              case P.NOSCRIPT:
                e._err(t, N.nestedNoscriptInHead);
                break;
              default:
                eJ(e, t);
            }
          })(this, e);
          break;
        case B.AFTER_HEAD:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.BODY:
                e._insertElement(t, L.HTML);
                e.framesetOk = false;
                e.insertionMode = B.IN_BODY;
                break;
              case P.FRAMESET:
                e._insertElement(t, L.HTML);
                e.insertionMode = B.IN_FRAMESET;
                break;
              case P.BASE:
              case P.BASEFONT:
              case P.BGSOUND:
              case P.LINK:
              case P.META:
              case P.NOFRAMES:
              case P.SCRIPT:
              case P.STYLE:
              case P.TEMPLATE:
              case P.TITLE:
                e._err(t, N.abandonedHeadElementChild);
                e.openElements.push(e.headElement, P.HEAD);
                eX(e, t);
                e.openElements.remove(e.headElement);
                break;
              case P.HEAD:
                e._err(t, N.misplacedStartTagForHeadElement);
                break;
              default:
                ej(e, t);
            }
          })(this, e);
          break;
        case B.IN_BODY:
          e2(this, e);
          break;
        case B.IN_TABLE:
          te(this, e);
          break;
        case B.IN_TABLE_TEXT:
          tn(this, e);
          break;
        case B.IN_CAPTION:
          (function (e, t) {
            let s = t.tagID;
            if (ti.has(s)) {
              if (e.openElements.hasInTableScope(P.CAPTION)) {
                e.openElements.generateImpliedEndTags();
                e.openElements.popUntilTagNamePopped(P.CAPTION);
                e.activeFormattingElements.clearToLastMarker();
                e.insertionMode = B.IN_TABLE;
                te(e, t);
              }
            } else {
              e2(e, t);
            }
          })(this, e);
          break;
        case B.IN_COLUMN_GROUP:
          to(this, e);
          break;
        case B.IN_TABLE_BODY:
          tE(this, e);
          break;
        case B.IN_ROW:
          th(this, e);
          break;
        case B.IN_CELL:
          (function (e, t) {
            let s = t.tagID;
            if (ti.has(s)) {
              if (e.openElements.hasInTableScope(P.TD) || e.openElements.hasInTableScope(P.TH)) {
                e._closeTableCell();
                th(e, t);
              }
            } else {
              e2(e, t);
            }
          })(this, e);
          break;
        case B.IN_SELECT:
          t_(this, e);
          break;
        case B.IN_SELECT_IN_TABLE:
          (function (e, t) {
            let s = t.tagID;
            if (s === P.CAPTION || s === P.TABLE || s === P.TBODY || s === P.TFOOT || s === P.THEAD || s === P.TR || s === P.TD || s === P.TH) {
              e.openElements.popUntilTagNamePopped(P.SELECT);
              e._resetInsertionMode();
              e._processStartTag(t);
            } else {
              t_(e, t);
            }
          })(this, e);
          break;
        case B.IN_TEMPLATE:
          (function (e, t) {
            switch (t.tagID) {
              case P.BASE:
              case P.BASEFONT:
              case P.BGSOUND:
              case P.LINK:
              case P.META:
              case P.NOFRAMES:
              case P.SCRIPT:
              case P.STYLE:
              case P.TEMPLATE:
              case P.TITLE:
                eX(e, t);
                break;
              case P.CAPTION:
              case P.COLGROUP:
              case P.TBODY:
              case P.TFOOT:
              case P.THEAD:
                e.tmplInsertionModeStack[0] = B.IN_TABLE;
                e.insertionMode = B.IN_TABLE;
                te(e, t);
                break;
              case P.COL:
                e.tmplInsertionModeStack[0] = B.IN_COLUMN_GROUP;
                e.insertionMode = B.IN_COLUMN_GROUP;
                to(e, t);
                break;
              case P.TR:
                e.tmplInsertionModeStack[0] = B.IN_TABLE_BODY;
                e.insertionMode = B.IN_TABLE_BODY;
                tE(e, t);
                break;
              case P.TD:
              case P.TH:
                e.tmplInsertionModeStack[0] = B.IN_ROW;
                e.insertionMode = B.IN_ROW;
                th(e, t);
                break;
              default:
                e.tmplInsertionModeStack[0] = B.IN_BODY;
                e.insertionMode = B.IN_BODY;
                e2(e, t);
            }
          })(this, e);
          break;
        case B.AFTER_BODY:
          a = this;
          if ((r = e).tagID === P.HTML) {
            e2(a, r);
          } else {
            tm(a, r);
          }
          break;
        case B.IN_FRAMESET:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.FRAMESET:
                e._insertElement(t, L.HTML);
                break;
              case P.FRAME:
                e._appendElement(t, L.HTML);
                t.ackSelfClosing = true;
                break;
              case P.NOFRAMES:
                eX(e, t);
            }
          })(this, e);
          break;
        case B.AFTER_FRAMESET:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.NOFRAMES:
                eX(e, t);
            }
          })(this, e);
          break;
        case B.AFTER_AFTER_BODY:
          n = this;
          if ((i = e).tagID === P.HTML) {
            e2(n, i);
          } else {
            tp(n, i);
          }
          break;
        case B.AFTER_AFTER_FRAMESET:
          (function (e, t) {
            switch (t.tagID) {
              case P.HTML:
                e2(e, t);
                break;
              case P.NOFRAMES:
                eX(e, t);
            }
          })(this, e);
      }
    }
    onEndTag(e) {
      this.skipNextNewLine = false;
      this.currentToken = e;
      if (this.currentNotInHTML) {
        (function (e, t) {
          if (t.tagID === P.P || t.tagID === P.BR) {
            tN(e);
            e._endTagOutsideForeignContent(t);
            return;
          }
          for (let s = e.openElements.stackTop; s > 0; s--) {
            let a = e.openElements.items[s];
            if (e.treeAdapter.getNamespaceURI(a) === L.HTML) {
              e._endTagOutsideForeignContent(t);
              break;
            }
            let r = e.treeAdapter.getTagName(a);
            if (r.toLowerCase() === t.tagName) {
              t.tagName = r;
              e.openElements.shortenToLength(s);
              break;
            }
          }
        })(this, e);
      } else {
        this._endTagOutsideForeignContent(e);
      }
    }
    _endTagOutsideForeignContent(e) {
      var t;
      var s;
      var a;
      var r;
      var n;
      var i;
      switch (this.insertionMode) {
        case B.INITIAL:
          eq(this, e);
          break;
        case B.BEFORE_HTML:
          (function (e, t) {
            let s = t.tagID;
            if (s === P.HTML || s === P.HEAD || s === P.BODY || s === P.BR) {
              eW(e, t);
            }
          })(this, e);
          break;
        case B.BEFORE_HEAD:
          (function (e, t) {
            let s = t.tagID;
            if (s === P.HEAD || s === P.BODY || s === P.HTML || s === P.BR) {
              eK(e, t);
            } else {
              e._err(t, N.endTagWithoutMatchingOpenElement);
            }
          })(this, e);
          break;
        case B.IN_HEAD:
          (function (e, t) {
            switch (t.tagID) {
              case P.HEAD:
                e.openElements.pop();
                e.insertionMode = B.AFTER_HEAD;
                break;
              case P.BODY:
              case P.BR:
              case P.HTML:
                ez(e, t);
                break;
              case P.TEMPLATE:
                eV(e, t);
                break;
              default:
                e._err(t, N.endTagWithoutMatchingOpenElement);
            }
          })(this, e);
          break;
        case B.IN_HEAD_NO_SCRIPT:
          (function (e, t) {
            switch (t.tagID) {
              case P.NOSCRIPT:
                e.openElements.pop();
                e.insertionMode = B.IN_HEAD;
                break;
              case P.BR:
                eJ(e, t);
                break;
              default:
                e._err(t, N.endTagWithoutMatchingOpenElement);
            }
          })(this, e);
          break;
        case B.AFTER_HEAD:
          (function (e, t) {
            switch (t.tagID) {
              case P.BODY:
              case P.HTML:
              case P.BR:
                ej(e, t);
                break;
              case P.TEMPLATE:
                eV(e, t);
                break;
              default:
                e._err(t, N.endTagWithoutMatchingOpenElement);
            }
          })(this, e);
          break;
        case B.IN_BODY:
          e6(this, e);
          break;
        case B.TEXT:
          t = this;
          if (e.tagID === P.SCRIPT) {
            if ((s = t.scriptHandler) !== null && s !== undefined) {
              s.call(t, t.openElements.current);
            }
          }
          t.openElements.pop();
          t.insertionMode = t.originalInsertionMode;
          break;
        case B.IN_TABLE:
          tt(this, e);
          break;
        case B.IN_TABLE_TEXT:
          tn(this, e);
          break;
        case B.IN_CAPTION:
          (function (e, t) {
            let s = t.tagID;
            switch (s) {
              case P.CAPTION:
              case P.TABLE:
                if (e.openElements.hasInTableScope(P.CAPTION)) {
                  e.openElements.generateImpliedEndTags();
                  e.openElements.popUntilTagNamePopped(P.CAPTION);
                  e.activeFormattingElements.clearToLastMarker();
                  e.insertionMode = B.IN_TABLE;
                  if (s === P.TABLE) {
                    tt(e, t);
                  }
                }
                break;
              case P.BODY:
              case P.COL:
              case P.COLGROUP:
              case P.HTML:
              case P.TBODY:
              case P.TD:
              case P.TFOOT:
              case P.TH:
              case P.THEAD:
              case P.TR:
                break;
              default:
                e6(e, t);
            }
          })(this, e);
          break;
        case B.IN_COLUMN_GROUP:
          (function (e, t) {
            switch (t.tagID) {
              case P.COLGROUP:
                if (e.openElements.currentTagId === P.COLGROUP) {
                  e.openElements.pop();
                  e.insertionMode = B.IN_TABLE;
                }
                break;
              case P.TEMPLATE:
                eV(e, t);
                break;
              case P.COL:
                break;
              default:
                tc(e, t);
            }
          })(this, e);
          break;
        case B.IN_TABLE_BODY:
          tT(this, e);
          break;
        case B.IN_ROW:
          tl(this, e);
          break;
        case B.IN_CELL:
          (function (e, t) {
            let s = t.tagID;
            switch (s) {
              case P.TD:
              case P.TH:
                if (e.openElements.hasInTableScope(s)) {
                  e.openElements.generateImpliedEndTags();
                  e.openElements.popUntilTagNamePopped(s);
                  e.activeFormattingElements.clearToLastMarker();
                  e.insertionMode = B.IN_ROW;
                }
                break;
              case P.TABLE:
              case P.TBODY:
              case P.TFOOT:
              case P.THEAD:
              case P.TR:
                if (e.openElements.hasInTableScope(s)) {
                  e._closeTableCell();
                  tl(e, t);
                }
                break;
              case P.BODY:
              case P.CAPTION:
              case P.COL:
              case P.COLGROUP:
              case P.HTML:
                break;
              default:
                e6(e, t);
            }
          })(this, e);
          break;
        case B.IN_SELECT:
          tA(this, e);
          break;
        case B.IN_SELECT_IN_TABLE:
          (function (e, t) {
            let s = t.tagID;
            if (s === P.CAPTION || s === P.TABLE || s === P.TBODY || s === P.TFOOT || s === P.THEAD || s === P.TR || s === P.TD || s === P.TH) {
              if (e.openElements.hasInTableScope(s)) {
                e.openElements.popUntilTagNamePopped(P.SELECT);
                e._resetInsertionMode();
                e.onEndTag(t);
              }
            } else {
              tA(e, t);
            }
          })(this, e);
          break;
        case B.IN_TEMPLATE:
          a = this;
          if ((r = e).tagID === P.TEMPLATE) {
            eV(a, r);
          }
          break;
        case B.AFTER_BODY:
          tu(this, e);
          break;
        case B.IN_FRAMESET:
          n = this;
          if (e.tagID === P.FRAMESET && !n.openElements.isRootHtmlElementCurrent()) {
            n.openElements.pop();
            if (!n.fragmentContext && n.openElements.currentTagId !== P.FRAMESET) {
              n.insertionMode = B.AFTER_FRAMESET;
            }
          }
          break;
        case B.AFTER_FRAMESET:
          i = this;
          if (e.tagID === P.HTML) {
            i.insertionMode = B.AFTER_AFTER_FRAMESET;
          }
          break;
        case B.AFTER_AFTER_BODY:
          tp(this, e);
      }
    }
    onEof(e) {
      switch (this.insertionMode) {
        case B.INITIAL:
          eq(this, e);
          break;
        case B.BEFORE_HTML:
          eW(this, e);
          break;
        case B.BEFORE_HEAD:
          eK(this, e);
          break;
        case B.IN_HEAD:
          ez(this, e);
          break;
        case B.IN_HEAD_NO_SCRIPT:
          eJ(this, e);
          break;
        case B.AFTER_HEAD:
          ej(this, e);
          break;
        case B.IN_BODY:
        case B.IN_TABLE:
        case B.IN_CAPTION:
        case B.IN_COLUMN_GROUP:
        case B.IN_TABLE_BODY:
        case B.IN_ROW:
        case B.IN_CELL:
        case B.IN_SELECT:
        case B.IN_SELECT_IN_TABLE:
          e9(this, e);
          break;
        case B.TEXT:
          var t;
          var s;
          t = this;
          s = e;
          t._err(s, N.eofInElementThatCanContainOnlyText);
          t.openElements.pop();
          t.insertionMode = t.originalInsertionMode;
          t.onEof(s);
          break;
        case B.IN_TABLE_TEXT:
          tn(this, e);
          break;
        case B.IN_TEMPLATE:
          td(this, e);
          break;
        case B.AFTER_BODY:
        case B.IN_FRAMESET:
        case B.AFTER_FRAMESET:
        case B.AFTER_AFTER_BODY:
        case B.AFTER_AFTER_FRAMESET:
          eQ(this, e);
      }
    }
    onWhitespaceCharacter(e) {
      if (this.skipNextNewLine && (this.skipNextNewLine = false, e.chars.charCodeAt(0) === p.LINE_FEED)) {
        if (e.chars.length === 1) {
          return;
        }
        e.chars = e.chars.substr(1);
      }
      if (this.tokenizer.inForeignNode) {
        this._insertCharacters(e);
        return;
      }
      switch (this.insertionMode) {
        case B.IN_HEAD:
        case B.IN_HEAD_NO_SCRIPT:
        case B.AFTER_HEAD:
        case B.TEXT:
        case B.IN_COLUMN_GROUP:
        case B.IN_SELECT:
        case B.IN_SELECT_IN_TABLE:
        case B.IN_FRAMESET:
        case B.AFTER_FRAMESET:
          this._insertCharacters(e);
          break;
        case B.IN_BODY:
        case B.IN_CAPTION:
        case B.IN_CELL:
        case B.IN_TEMPLATE:
        case B.AFTER_BODY:
        case B.AFTER_AFTER_BODY:
        case B.AFTER_AFTER_FRAMESET:
          e$(this, e);
          break;
        case B.IN_TABLE:
        case B.IN_TABLE_BODY:
        case B.IN_ROW:
          e7(this, e);
          break;
        case B.IN_TABLE_TEXT:
          ta(this, e);
      }
    }
  }
  function eY(e, t) {
    for (let s = 0; s < 8; s++) {
      let s = function (e, t) {
        let s = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
        if (s) {
          if (e.openElements.contains(s.element)) {
            if (!e.openElements.hasInScope(t.tagID)) {
              s = null;
            }
          } else {
            e.activeFormattingElements.removeEntry(s);
            s = null;
          }
        } else {
          e4(e, t);
        }
        return s;
      }(e, t);
      if (!s) {
        break;
      }
      let a = function (e, t) {
        let s = null;
        let a = e.openElements.stackTop;
        for (; a >= 0; a--) {
          let r = e.openElements.items[a];
          if (r === t.element) {
            break;
          }
          if (e._isSpecialElement(r, e.openElements.tagIDs[a])) {
            s = r;
          }
        }
        if (!s) {
          e.openElements.shortenToLength(Math.max(a, 0));
          e.activeFormattingElements.removeEntry(t);
        }
        return s;
      }(e, s);
      if (!a) {
        break;
      }
      e.activeFormattingElements.bookmark = s;
      let r = function (e, t, s) {
        let a = t;
        let r = e.openElements.getCommonAncestor(t);
        for (let n = 0, i = r; i !== s; n++, i = r) {
          r = e.openElements.getCommonAncestor(i);
          let s = e.activeFormattingElements.getElementEntry(i);
          let o = s && n >= 3;
          if (!s || o) {
            if (o) {
              e.activeFormattingElements.removeEntry(s);
            }
            e.openElements.remove(i);
          } else {
            i = function (e, t) {
              let s = e.treeAdapter.getNamespaceURI(t.element);
              let a = e.treeAdapter.createElement(t.token.tagName, s, t.token.attrs);
              e.openElements.replace(t.element, a);
              t.element = a;
              return a;
            }(e, s);
            if (a === t) {
              e.activeFormattingElements.bookmark = s;
            }
            e.treeAdapter.detachNode(a);
            e.treeAdapter.appendChild(i, a);
            a = i;
          }
        }
        return a;
      }(e, a, s.element);
      let n = e.openElements.getCommonAncestor(s.element);
      e.treeAdapter.detachNode(r);
      if (n) {
        (function (e, t, s) {
          let a = V(e.treeAdapter.getTagName(t));
          if (e._isElementCausesFosterParenting(a)) {
            e._fosterParentElement(s);
          } else {
            let r = e.treeAdapter.getNamespaceURI(t);
            if (a === P.TEMPLATE && r === L.HTML) {
              t = e.treeAdapter.getTemplateContent(t);
            }
            e.treeAdapter.appendChild(t, s);
          }
        })(e, n, r);
      }
      (function (e, t, s) {
        let a = e.treeAdapter.getNamespaceURI(s.element);
        let {
          token: r
        } = s;
        let n = e.treeAdapter.createElement(r.tagName, a, r.attrs);
        e._adoptNodes(t, n);
        e.treeAdapter.appendChild(t, n);
        e.activeFormattingElements.insertElementAfterBookmark(n, r);
        e.activeFormattingElements.removeEntry(s);
        e.openElements.remove(s.element);
        e.openElements.insertAfter(t, n, r.tagID);
      })(e, a, s);
    }
  }
  function ev(e, t) {
    e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
  }
  function eQ(e, t) {
    e.stopped = true;
    if (t.location) {
      let s = !e.fragmentContext * 2;
      for (let a = e.openElements.stackTop; a >= s; a--) {
        e._setEndLocation(e.openElements.items[a], t);
      }
      if (!e.fragmentContext && e.openElements.stackTop >= 0) {
        let s = e.openElements.items[0];
        let a = e.treeAdapter.getNodeSourceCodeLocation(s);
        if (a && !a.endTag && (e._setEndLocation(s, t), e.openElements.stackTop >= 1)) {
          let s = e.openElements.items[1];
          let a = e.treeAdapter.getNodeSourceCodeLocation(s);
          if (a && !a.endTag) {
            e._setEndLocation(s, t);
          }
        }
      }
    }
  }
  function eq(e, t) {
    e._err(t, N.missingDoctype, true);
    e.treeAdapter.setDocumentMode(e.document, g.QUIRKS);
    e.insertionMode = B.BEFORE_HTML;
    e._processToken(t);
  }
  function eW(e, t) {
    e._insertFakeRootElement();
    e.insertionMode = B.BEFORE_HEAD;
    e._processToken(t);
  }
  function eK(e, t) {
    e._insertFakeElement(k.HEAD, P.HEAD);
    e.headElement = e.openElements.current;
    e.insertionMode = B.IN_HEAD;
    e._processToken(t);
  }
  function eX(e, t) {
    switch (t.tagID) {
      case P.HTML:
        e2(e, t);
        break;
      case P.BASE:
      case P.BASEFONT:
      case P.BGSOUND:
      case P.LINK:
      case P.META:
        e._appendElement(t, L.HTML);
        t.ackSelfClosing = true;
        break;
      case P.TITLE:
        e._switchToTextParsing(t, ee.RCDATA);
        break;
      case P.NOSCRIPT:
        if (e.options.scriptingEnabled) {
          e._switchToTextParsing(t, ee.RAWTEXT);
        } else {
          e._insertElement(t, L.HTML);
          e.insertionMode = B.IN_HEAD_NO_SCRIPT;
        }
        break;
      case P.NOFRAMES:
      case P.STYLE:
        e._switchToTextParsing(t, ee.RAWTEXT);
        break;
      case P.SCRIPT:
        e._switchToTextParsing(t, ee.SCRIPT_DATA);
        break;
      case P.TEMPLATE:
        e._insertTemplate(t);
        e.activeFormattingElements.insertMarker();
        e.framesetOk = false;
        e.insertionMode = B.IN_TEMPLATE;
        e.tmplInsertionModeStack.unshift(B.IN_TEMPLATE);
        break;
      case P.HEAD:
        e._err(t, N.misplacedStartTagForHeadElement);
        break;
      default:
        ez(e, t);
    }
  }
  function eV(e, t) {
    if (e.openElements.tmplCount > 0) {
      e.openElements.generateImpliedEndTagsThoroughly();
      if (e.openElements.currentTagId !== P.TEMPLATE) {
        e._err(t, N.closingOfElementWithOpenChildElements);
      }
      e.openElements.popUntilTagNamePopped(P.TEMPLATE);
      e.activeFormattingElements.clearToLastMarker();
      e.tmplInsertionModeStack.shift();
      e._resetInsertionMode();
    } else {
      e._err(t, N.endTagWithoutMatchingOpenElement);
    }
  }
  function ez(e, t) {
    e.openElements.pop();
    e.insertionMode = B.AFTER_HEAD;
    e._processToken(t);
  }
  function eJ(e, t) {
    let s = t.type === I.EOF ? N.openElementsLeftAfterEof : N.disallowedContentInNoscriptInHead;
    e._err(t, s);
    e.openElements.pop();
    e.insertionMode = B.IN_HEAD;
    e._processToken(t);
  }
  function ej(e, t) {
    e._insertFakeElement(k.BODY, P.BODY);
    e.insertionMode = B.IN_BODY;
    eZ(e, t);
  }
  function eZ(e, t) {
    switch (t.type) {
      case I.CHARACTER:
        e0(e, t);
        break;
      case I.WHITESPACE_CHARACTER:
        e$(e, t);
        break;
      case I.COMMENT:
        ev(e, t);
        break;
      case I.START_TAG:
        e2(e, t);
        break;
      case I.END_TAG:
        e6(e, t);
        break;
      case I.EOF:
        e9(e, t);
    }
  }
  function e$(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertCharacters(t);
  }
  function e0(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertCharacters(t);
    e.framesetOk = false;
  }
  function e1(e, t) {
    e._reconstructActiveFormattingElements();
    e._appendElement(t, L.HTML);
    e.framesetOk = false;
    t.ackSelfClosing = true;
  }
  function e3(e) {
    let t = v(e, f.TYPE);
    return t != null && t.toLowerCase() === "hidden";
  }
  function e5(e, t) {
    e._switchToTextParsing(t, ee.RAWTEXT);
  }
  function e8(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertElement(t, L.HTML);
  }
  function e2(e, t) {
    switch (t.tagID) {
      case P.I:
      case P.S:
      case P.B:
      case P.U:
      case P.EM:
      case P.TT:
      case P.BIG:
      case P.CODE:
      case P.FONT:
      case P.SMALL:
      case P.STRIKE:
      case P.STRONG:
        e._reconstructActiveFormattingElements();
        e._insertElement(t, L.HTML);
        e.activeFormattingElements.pushElement(e.openElements.current, t);
        break;
      case P.A:
        (function (e, t) {
          let s = e.activeFormattingElements.getElementEntryInScopeWithTagName(k.A);
          if (s) {
            eY(e, t);
            e.openElements.remove(s.element);
            e.activeFormattingElements.removeEntry(s);
          }
          e._reconstructActiveFormattingElements();
          e._insertElement(t, L.HTML);
          e.activeFormattingElements.pushElement(e.openElements.current, t);
        })(e, t);
        break;
      case P.H1:
      case P.H2:
      case P.H3:
      case P.H4:
      case P.H5:
      case P.H6:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        if (e.openElements.currentTagId !== undefined && j.has(e.openElements.currentTagId)) {
          e.openElements.pop();
        }
        e._insertElement(t, L.HTML);
        break;
      case P.P:
      case P.DL:
      case P.OL:
      case P.UL:
      case P.DIV:
      case P.DIR:
      case P.NAV:
      case P.MAIN:
      case P.MENU:
      case P.ASIDE:
      case P.CENTER:
      case P.FIGURE:
      case P.FOOTER:
      case P.HEADER:
      case P.HGROUP:
      case P.DIALOG:
      case P.DETAILS:
      case P.ADDRESS:
      case P.ARTICLE:
      case P.SEARCH:
      case P.SECTION:
      case P.SUMMARY:
      case P.FIELDSET:
      case P.BLOCKQUOTE:
      case P.FIGCAPTION:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._insertElement(t, L.HTML);
        break;
      case P.LI:
      case P.DD:
      case P.DT:
        (function (e, t) {
          e.framesetOk = false;
          let s = t.tagID;
          for (let t = e.openElements.stackTop; t >= 0; t--) {
            let a = e.openElements.tagIDs[t];
            if (s === P.LI && a === P.LI || (s === P.DD || s === P.DT) && (a === P.DD || a === P.DT)) {
              e.openElements.generateImpliedEndTagsWithExclusion(a);
              e.openElements.popUntilTagNamePopped(a);
              break;
            }
            if (a !== P.ADDRESS && a !== P.DIV && a !== P.P && e._isSpecialElement(e.openElements.items[t], a)) {
              break;
            }
          }
          if (e.openElements.hasInButtonScope(P.P)) {
            e._closePElement();
          }
          e._insertElement(t, L.HTML);
        })(e, t);
        break;
      case P.BR:
      case P.IMG:
      case P.WBR:
      case P.AREA:
      case P.EMBED:
      case P.KEYGEN:
        e1(e, t);
        break;
      case P.HR:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._appendElement(t, L.HTML);
        e.framesetOk = false;
        t.ackSelfClosing = true;
        break;
      case P.RB:
      case P.RTC:
        if (e.openElements.hasInScope(P.RUBY)) {
          e.openElements.generateImpliedEndTags();
        }
        e._insertElement(t, L.HTML);
        break;
      case P.RT:
      case P.RP:
        if (e.openElements.hasInScope(P.RUBY)) {
          e.openElements.generateImpliedEndTagsWithExclusion(P.RTC);
        }
        e._insertElement(t, L.HTML);
        break;
      case P.PRE:
      case P.LISTING:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._insertElement(t, L.HTML);
        e.skipNextNewLine = true;
        e.framesetOk = false;
        break;
      case P.XMP:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._reconstructActiveFormattingElements();
        e.framesetOk = false;
        e._switchToTextParsing(t, ee.RAWTEXT);
        break;
      case P.SVG:
        e._reconstructActiveFormattingElements();
        eU(t);
        eF(t);
        if (t.selfClosing) {
          e._appendElement(t, L.SVG);
        } else {
          e._insertElement(t, L.SVG);
        }
        t.ackSelfClosing = true;
        break;
      case P.HTML:
        if (e.openElements.tmplCount === 0) {
          e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
        }
        break;
      case P.BASE:
      case P.LINK:
      case P.META:
      case P.STYLE:
      case P.TITLE:
      case P.SCRIPT:
      case P.BGSOUND:
      case P.BASEFONT:
      case P.TEMPLATE:
        eX(e, t);
        break;
      case P.BODY:
        (function (e, t) {
          let s = e.openElements.tryPeekProperlyNestedBodyElement();
          if (s && e.openElements.tmplCount === 0) {
            e.framesetOk = false;
            e.treeAdapter.adoptAttributes(s, t.attrs);
          }
        })(e, t);
        break;
      case P.FORM:
        (function (e, t) {
          let s = e.openElements.tmplCount > 0;
          if (!e.formElement || !!s) {
            if (e.openElements.hasInButtonScope(P.P)) {
              e._closePElement();
            }
            e._insertElement(t, L.HTML);
            if (!s) {
              e.formElement = e.openElements.current;
            }
          }
        })(e, t);
        break;
      case P.NOBR:
        e._reconstructActiveFormattingElements();
        if (e.openElements.hasInScope(P.NOBR)) {
          eY(e, t);
          e._reconstructActiveFormattingElements();
        }
        e._insertElement(t, L.HTML);
        e.activeFormattingElements.pushElement(e.openElements.current, t);
        break;
      case P.MATH:
        e._reconstructActiveFormattingElements();
        eH(t);
        eF(t);
        if (t.selfClosing) {
          e._appendElement(t, L.MATHML);
        } else {
          e._insertElement(t, L.MATHML);
        }
        t.ackSelfClosing = true;
        break;
      case P.TABLE:
        if (e.treeAdapter.getDocumentMode(e.document) !== g.QUIRKS && e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._insertElement(t, L.HTML);
        e.framesetOk = false;
        e.insertionMode = B.IN_TABLE;
        break;
      case P.INPUT:
        e._reconstructActiveFormattingElements();
        e._appendElement(t, L.HTML);
        if (!e3(t)) {
          e.framesetOk = false;
        }
        t.ackSelfClosing = true;
        break;
      case P.PARAM:
      case P.TRACK:
      case P.SOURCE:
        e._appendElement(t, L.HTML);
        t.ackSelfClosing = true;
        break;
      case P.IMAGE:
        t.tagName = k.IMG;
        t.tagID = P.IMG;
        e1(e, t);
        break;
      case P.BUTTON:
        if (e.openElements.hasInScope(P.BUTTON)) {
          e.openElements.generateImpliedEndTags();
          e.openElements.popUntilTagNamePopped(P.BUTTON);
        }
        e._reconstructActiveFormattingElements();
        e._insertElement(t, L.HTML);
        e.framesetOk = false;
        break;
      case P.APPLET:
      case P.OBJECT:
      case P.MARQUEE:
        e._reconstructActiveFormattingElements();
        e._insertElement(t, L.HTML);
        e.activeFormattingElements.insertMarker();
        e.framesetOk = false;
        break;
      case P.IFRAME:
        e.framesetOk = false;
        e._switchToTextParsing(t, ee.RAWTEXT);
        break;
      case P.SELECT:
        e._reconstructActiveFormattingElements();
        e._insertElement(t, L.HTML);
        e.framesetOk = false;
        e.insertionMode = e.insertionMode === B.IN_TABLE || e.insertionMode === B.IN_CAPTION || e.insertionMode === B.IN_TABLE_BODY || e.insertionMode === B.IN_ROW || e.insertionMode === B.IN_CELL ? B.IN_SELECT_IN_TABLE : B.IN_SELECT;
        break;
      case P.OPTION:
      case P.OPTGROUP:
        if (e.openElements.currentTagId === P.OPTION) {
          e.openElements.pop();
        }
        e._reconstructActiveFormattingElements();
        e._insertElement(t, L.HTML);
        break;
      case P.NOEMBED:
      case P.NOFRAMES:
        e5(e, t);
        break;
      case P.FRAMESET:
        (function (e, t) {
          let s = e.openElements.tryPeekProperlyNestedBodyElement();
          if (e.framesetOk && s) {
            e.treeAdapter.detachNode(s);
            e.openElements.popAllUpToHtmlElement();
            e._insertElement(t, L.HTML);
            e.insertionMode = B.IN_FRAMESET;
          }
        })(e, t);
        break;
      case P.TEXTAREA:
        e._insertElement(t, L.HTML);
        e.skipNextNewLine = true;
        e.tokenizer.state = ee.RCDATA;
        e.originalInsertionMode = e.insertionMode;
        e.framesetOk = false;
        e.insertionMode = B.TEXT;
        break;
      case P.NOSCRIPT:
        if (e.options.scriptingEnabled) {
          e5(e, t);
        } else {
          e8(e, t);
        }
        break;
      case P.PLAINTEXT:
        if (e.openElements.hasInButtonScope(P.P)) {
          e._closePElement();
        }
        e._insertElement(t, L.HTML);
        e.tokenizer.state = ee.PLAINTEXT;
        break;
      case P.COL:
      case P.TH:
      case P.TD:
      case P.TR:
      case P.HEAD:
      case P.FRAME:
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
      case P.CAPTION:
      case P.COLGROUP:
        break;
      default:
        e8(e, t);
    }
  }
  function e4(e, t) {
    let s = t.tagName;
    let a = t.tagID;
    for (let t = e.openElements.stackTop; t > 0; t--) {
      let r = e.openElements.items[t];
      let n = e.openElements.tagIDs[t];
      if (a === n && (a !== P.UNKNOWN || e.treeAdapter.getTagName(r) === s)) {
        e.openElements.generateImpliedEndTagsWithExclusion(a);
        if (e.openElements.stackTop >= t) {
          e.openElements.shortenToLength(t);
        }
        break;
      }
      if (e._isSpecialElement(r, n)) {
        break;
      }
    }
  }
  function e6(e, t) {
    switch (t.tagID) {
      case P.A:
      case P.B:
      case P.I:
      case P.S:
      case P.U:
      case P.EM:
      case P.TT:
      case P.BIG:
      case P.CODE:
      case P.FONT:
      case P.NOBR:
      case P.SMALL:
      case P.STRIKE:
      case P.STRONG:
        eY(e, t);
        break;
      case P.P:
        if (!e.openElements.hasInButtonScope(P.P)) {
          e._insertFakeElement(k.P, P.P);
        }
        e._closePElement();
        break;
      case P.DL:
      case P.UL:
      case P.OL:
      case P.DIR:
      case P.DIV:
      case P.NAV:
      case P.PRE:
      case P.MAIN:
      case P.MENU:
      case P.ASIDE:
      case P.BUTTON:
      case P.CENTER:
      case P.FIGURE:
      case P.FOOTER:
      case P.HEADER:
      case P.HGROUP:
      case P.DIALOG:
      case P.ADDRESS:
      case P.ARTICLE:
      case P.DETAILS:
      case P.SEARCH:
      case P.SECTION:
      case P.SUMMARY:
      case P.LISTING:
      case P.FIELDSET:
      case P.BLOCKQUOTE:
      case P.FIGCAPTION:
        (function (e, t) {
          let s = t.tagID;
          if (e.openElements.hasInScope(s)) {
            e.openElements.generateImpliedEndTags();
            e.openElements.popUntilTagNamePopped(s);
          }
        })(e, t);
        break;
      case P.LI:
        if (e.openElements.hasInListItemScope(P.LI)) {
          e.openElements.generateImpliedEndTagsWithExclusion(P.LI);
          e.openElements.popUntilTagNamePopped(P.LI);
        }
        break;
      case P.DD:
      case P.DT:
        (function (e, t) {
          let s = t.tagID;
          if (e.openElements.hasInScope(s)) {
            e.openElements.generateImpliedEndTagsWithExclusion(s);
            e.openElements.popUntilTagNamePopped(s);
          }
        })(e, t);
        break;
      case P.H1:
      case P.H2:
      case P.H3:
      case P.H4:
      case P.H5:
      case P.H6:
        if (e.openElements.hasNumberedHeaderInScope()) {
          e.openElements.generateImpliedEndTags();
          e.openElements.popUntilNumberedHeaderPopped();
        }
        break;
      case P.BR:
        e._reconstructActiveFormattingElements();
        e._insertFakeElement(k.BR, P.BR);
        e.openElements.pop();
        e.framesetOk = false;
        break;
      case P.BODY:
        (function (e, t) {
          if (e.openElements.hasInScope(P.BODY) && (e.insertionMode = B.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
            let s = e.openElements.tryPeekProperlyNestedBodyElement();
            if (s) {
              e._setEndLocation(s, t);
            }
          }
        })(e, t);
        break;
      case P.HTML:
        if (e.openElements.hasInScope(P.BODY)) {
          e.insertionMode = B.AFTER_BODY;
          tu(e, t);
        }
        break;
      case P.FORM:
        (function (e) {
          let t = e.openElements.tmplCount > 0;
          let {
            formElement: s
          } = e;
          if (!t) {
            e.formElement = null;
          }
          if ((s || t) && e.openElements.hasInScope(P.FORM)) {
            e.openElements.generateImpliedEndTags();
            if (t) {
              e.openElements.popUntilTagNamePopped(P.FORM);
            } else if (s) {
              e.openElements.remove(s);
            }
          }
        })(e);
        break;
      case P.APPLET:
      case P.OBJECT:
      case P.MARQUEE:
        (function (e, t) {
          let s = t.tagID;
          if (e.openElements.hasInScope(s)) {
            e.openElements.generateImpliedEndTags();
            e.openElements.popUntilTagNamePopped(s);
            e.activeFormattingElements.clearToLastMarker();
          }
        })(e, t);
        break;
      case P.TEMPLATE:
        eV(e, t);
        break;
      default:
        e4(e, t);
    }
  }
  function e9(e, t) {
    if (e.tmplInsertionModeStack.length > 0) {
      td(e, t);
    } else {
      eQ(e, t);
    }
  }
  function e7(e, t) {
    if (e.openElements.currentTagId !== undefined && eG.has(e.openElements.currentTagId)) {
      e.pendingCharacterTokens.length = 0;
      e.hasNonWhitespacePendingCharacterToken = false;
      e.originalInsertionMode = e.insertionMode;
      e.insertionMode = B.IN_TABLE_TEXT;
      switch (t.type) {
        case I.CHARACTER:
          tr(e, t);
          break;
        case I.WHITESPACE_CHARACTER:
          ta(e, t);
      }
    } else {
      ts(e, t);
    }
  }
  function te(e, t) {
    switch (t.tagID) {
      case P.TD:
      case P.TH:
      case P.TR:
        e.openElements.clearBackToTableContext();
        e._insertFakeElement(k.TBODY, P.TBODY);
        e.insertionMode = B.IN_TABLE_BODY;
        tE(e, t);
        break;
      case P.STYLE:
      case P.SCRIPT:
      case P.TEMPLATE:
        eX(e, t);
        break;
      case P.COL:
        e.openElements.clearBackToTableContext();
        e._insertFakeElement(k.COLGROUP, P.COLGROUP);
        e.insertionMode = B.IN_COLUMN_GROUP;
        to(e, t);
        break;
      case P.FORM:
        if (!e.formElement && e.openElements.tmplCount === 0) {
          e._insertElement(t, L.HTML);
          e.formElement = e.openElements.current;
          e.openElements.pop();
        }
        break;
      case P.TABLE:
        if (e.openElements.hasInTableScope(P.TABLE)) {
          e.openElements.popUntilTagNamePopped(P.TABLE);
          e._resetInsertionMode();
          e._processStartTag(t);
        }
        break;
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
        e.openElements.clearBackToTableContext();
        e._insertElement(t, L.HTML);
        e.insertionMode = B.IN_TABLE_BODY;
        break;
      case P.INPUT:
        if (e3(t)) {
          e._appendElement(t, L.HTML);
        } else {
          ts(e, t);
        }
        t.ackSelfClosing = true;
        break;
      case P.CAPTION:
        e.openElements.clearBackToTableContext();
        e.activeFormattingElements.insertMarker();
        e._insertElement(t, L.HTML);
        e.insertionMode = B.IN_CAPTION;
        break;
      case P.COLGROUP:
        e.openElements.clearBackToTableContext();
        e._insertElement(t, L.HTML);
        e.insertionMode = B.IN_COLUMN_GROUP;
        break;
      default:
        ts(e, t);
    }
  }
  function tt(e, t) {
    switch (t.tagID) {
      case P.TABLE:
        if (e.openElements.hasInTableScope(P.TABLE)) {
          e.openElements.popUntilTagNamePopped(P.TABLE);
          e._resetInsertionMode();
        }
        break;
      case P.TEMPLATE:
        eV(e, t);
        break;
      case P.BODY:
      case P.CAPTION:
      case P.COL:
      case P.COLGROUP:
      case P.HTML:
      case P.TBODY:
      case P.TD:
      case P.TFOOT:
      case P.TH:
      case P.THEAD:
      case P.TR:
        break;
      default:
        ts(e, t);
    }
  }
  function ts(e, t) {
    let s = e.fosterParentingEnabled;
    e.fosterParentingEnabled = true;
    eZ(e, t);
    e.fosterParentingEnabled = s;
  }
  function ta(e, t) {
    e.pendingCharacterTokens.push(t);
  }
  function tr(e, t) {
    e.pendingCharacterTokens.push(t);
    e.hasNonWhitespacePendingCharacterToken = true;
  }
  function tn(e, t) {
    let s = 0;
    if (e.hasNonWhitespacePendingCharacterToken) {
      for (; s < e.pendingCharacterTokens.length; s++) {
        ts(e, e.pendingCharacterTokens[s]);
      }
    } else {
      for (; s < e.pendingCharacterTokens.length; s++) {
        e._insertCharacters(e.pendingCharacterTokens[s]);
      }
    }
    e.insertionMode = e.originalInsertionMode;
    e._processToken(t);
  }
  let ti = new Set([P.CAPTION, P.COL, P.COLGROUP, P.TBODY, P.TD, P.TFOOT, P.TH, P.THEAD, P.TR]);
  function to(e, t) {
    switch (t.tagID) {
      case P.HTML:
        e2(e, t);
        break;
      case P.COL:
        e._appendElement(t, L.HTML);
        t.ackSelfClosing = true;
        break;
      case P.TEMPLATE:
        eX(e, t);
        break;
      default:
        tc(e, t);
    }
  }
  function tc(e, t) {
    if (e.openElements.currentTagId === P.COLGROUP) {
      e.openElements.pop();
      e.insertionMode = B.IN_TABLE;
      e._processToken(t);
    }
  }
  function tE(e, t) {
    switch (t.tagID) {
      case P.TR:
        e.openElements.clearBackToTableBodyContext();
        e._insertElement(t, L.HTML);
        e.insertionMode = B.IN_ROW;
        break;
      case P.TH:
      case P.TD:
        e.openElements.clearBackToTableBodyContext();
        e._insertFakeElement(k.TR, P.TR);
        e.insertionMode = B.IN_ROW;
        th(e, t);
        break;
      case P.CAPTION:
      case P.COL:
      case P.COLGROUP:
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
        if (e.openElements.hasTableBodyContextInTableScope()) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE;
          te(e, t);
        }
        break;
      default:
        te(e, t);
    }
  }
  function tT(e, t) {
    let s = t.tagID;
    switch (t.tagID) {
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
        if (e.openElements.hasInTableScope(s)) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE;
        }
        break;
      case P.TABLE:
        if (e.openElements.hasTableBodyContextInTableScope()) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE;
          tt(e, t);
        }
        break;
      case P.BODY:
      case P.CAPTION:
      case P.COL:
      case P.COLGROUP:
      case P.HTML:
      case P.TD:
      case P.TH:
      case P.TR:
        break;
      default:
        tt(e, t);
    }
  }
  function th(e, t) {
    switch (t.tagID) {
      case P.TH:
      case P.TD:
        e.openElements.clearBackToTableRowContext();
        e._insertElement(t, L.HTML);
        e.insertionMode = B.IN_CELL;
        e.activeFormattingElements.insertMarker();
        break;
      case P.CAPTION:
      case P.COL:
      case P.COLGROUP:
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
      case P.TR:
        if (e.openElements.hasInTableScope(P.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE_BODY;
          tE(e, t);
        }
        break;
      default:
        te(e, t);
    }
  }
  function tl(e, t) {
    switch (t.tagID) {
      case P.TR:
        if (e.openElements.hasInTableScope(P.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE_BODY;
        }
        break;
      case P.TABLE:
        if (e.openElements.hasInTableScope(P.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE_BODY;
          tT(e, t);
        }
        break;
      case P.TBODY:
      case P.TFOOT:
      case P.THEAD:
        if (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(P.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B.IN_TABLE_BODY;
          tT(e, t);
        }
        break;
      case P.BODY:
      case P.CAPTION:
      case P.COL:
      case P.COLGROUP:
      case P.HTML:
      case P.TD:
      case P.TH:
        break;
      default:
        tt(e, t);
    }
  }
  function t_(e, t) {
    switch (t.tagID) {
      case P.HTML:
        e2(e, t);
        break;
      case P.OPTION:
        if (e.openElements.currentTagId === P.OPTION) {
          e.openElements.pop();
        }
        e._insertElement(t, L.HTML);
        break;
      case P.OPTGROUP:
        if (e.openElements.currentTagId === P.OPTION) {
          e.openElements.pop();
        }
        if (e.openElements.currentTagId === P.OPTGROUP) {
          e.openElements.pop();
        }
        e._insertElement(t, L.HTML);
        break;
      case P.HR:
        if (e.openElements.currentTagId === P.OPTION) {
          e.openElements.pop();
        }
        if (e.openElements.currentTagId === P.OPTGROUP) {
          e.openElements.pop();
        }
        e._appendElement(t, L.HTML);
        t.ackSelfClosing = true;
        break;
      case P.INPUT:
      case P.KEYGEN:
      case P.TEXTAREA:
      case P.SELECT:
        if (e.openElements.hasInSelectScope(P.SELECT)) {
          e.openElements.popUntilTagNamePopped(P.SELECT);
          e._resetInsertionMode();
          if (t.tagID !== P.SELECT) {
            e._processStartTag(t);
          }
        }
        break;
      case P.SCRIPT:
      case P.TEMPLATE:
        eX(e, t);
    }
  }
  function tA(e, t) {
    switch (t.tagID) {
      case P.OPTGROUP:
        if (e.openElements.stackTop > 0 && e.openElements.currentTagId === P.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === P.OPTGROUP) {
          e.openElements.pop();
        }
        if (e.openElements.currentTagId === P.OPTGROUP) {
          e.openElements.pop();
        }
        break;
      case P.OPTION:
        if (e.openElements.currentTagId === P.OPTION) {
          e.openElements.pop();
        }
        break;
      case P.SELECT:
        if (e.openElements.hasInSelectScope(P.SELECT)) {
          e.openElements.popUntilTagNamePopped(P.SELECT);
          e._resetInsertionMode();
        }
        break;
      case P.TEMPLATE:
        eV(e, t);
    }
  }
  function td(e, t) {
    if (e.openElements.tmplCount > 0) {
      e.openElements.popUntilTagNamePopped(P.TEMPLATE);
      e.activeFormattingElements.clearToLastMarker();
      e.tmplInsertionModeStack.shift();
      e._resetInsertionMode();
      e.onEof(t);
    } else {
      eQ(e, t);
    }
  }
  function tu(e, t) {
    if (t.tagID === P.HTML) {
      if (!e.fragmentContext) {
        e.insertionMode = B.AFTER_AFTER_BODY;
      }
      if (e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === P.HTML) {
        e._setEndLocation(e.openElements.items[0], t);
        let a = e.openElements.items[1];
        if (!!a && !e.treeAdapter.getNodeSourceCodeLocation(a)?.endTag) {
          e._setEndLocation(a, t);
        }
      }
    } else {
      tm(e, t);
    }
  }
  function tm(e, t) {
    e.insertionMode = B.IN_BODY;
    eZ(e, t);
  }
  function tp(e, t) {
    e.insertionMode = B.IN_BODY;
    eZ(e, t);
  }
  function tN(e) {
    while (e.treeAdapter.getNamespaceURI(e.openElements.current) !== L.HTML && e.openElements.currentTagId !== undefined && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current)) {
      e.openElements.pop();
    }
  }
  function tI(e, t) {
    return function (s) {
      let a;
      let r = 0;
      let n = "";
      while (a = e.exec(s)) {
        if (r !== a.index) {
          n += s.substring(r, a.index);
        }
        n += t.get(a[0].charCodeAt(0));
        r = a.index + 1;
      }
      return n + s.substring(r);
    };
  }
  if (String.prototype.codePointAt != null) {
    (e, t) => e.codePointAt(t);
  }
  let tS = tI(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]));
  let tC = tI(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
  let tD = new Set([k.AREA, k.BASE, k.BASEFONT, k.BGSOUND, k.BR, k.COL, k.EMBED, k.FRAME, k.HR, k.IMG, k.INPUT, k.KEYGEN, k.LINK, k.META, k.PARAM, k.SOURCE, k.TRACK, k.WBR]);
  function tO(e, t) {
    return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === L.HTML && tD.has(t.treeAdapter.getTagName(e));
  }
  let tR = {
    treeAdapter: eS,
    scriptingEnabled: true
  };
  function tL(e, t) {
    let s = {
      ...tR,
      ...t
    };
    if (tO(e, s)) {
      return "";
    } else {
      return tg(e, s);
    }
  }
  function tf(e, t) {
    return tk(e, {
      ...tR,
      ...t
    });
  }
  function tg(e, t) {
    let s = "";
    let a = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === k.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === L.HTML ? t.treeAdapter.getTemplateContent(e) : e;
    let r = t.treeAdapter.getChildNodes(a);
    if (r) {
      for (let e of r) {
        s += tk(e, t);
      }
    }
    return s;
  }
  function tk(e, t) {
    if (t.treeAdapter.isElementNode(e)) {
      return function (e, t) {
        let s = t.treeAdapter.getTagName(e);
        return `<${s}${function (e, {
          treeAdapter: t
        }) {
          let s = "";
          for (let a of t.getAttrList(e)) {
            s += " ";
            if (a.namespace) {
              switch (a.namespace) {
                case L.XML:
                  s += `xml:${a.name}`;
                  break;
                case L.XMLNS:
                  if (a.name !== "xmlns") {
                    s += "xmlns:";
                  }
                  s += a.name;
                  break;
                case L.XLINK:
                  s += `xlink:${a.name}`;
                  break;
                default:
                  s += `${a.prefix}:${a.name}`;
              }
            } else {
              s += a.name;
            }
            s += `="${tS(a.value)}"`;
          }
          return s;
        }(e, t)}>${tO(e, t) ? "" : `${tg(e, t)}</${s}>`}`;
      }(e, t);
    } else if (t.treeAdapter.isTextNode(e)) {
      return function (e, t) {
        let {
          treeAdapter: s
        } = t;
        let a = s.getTextNodeContent(e);
        let r = s.getParentNode(e);
        let n = r && s.isElementNode(r) && s.getTagName(r);
        if (n && s.getNamespaceURI(r) === L.HTML && $(n, t.scriptingEnabled)) {
          return a;
        } else {
          return tC(a);
        }
      }(e, t);
    } else if (t.treeAdapter.isCommentNode(e)) {
      return function (e, {
        treeAdapter: t
      }) {
        return `<!--${t.getCommentNodeContent(e)}-->`;
      }(e, t);
    } else if (t.treeAdapter.isDocumentTypeNode(e)) {
      return function (e, {
        treeAdapter: t
      }) {
        return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
      }(e, t);
    } else {
      return "";
    }
  }
  function tP(e, t) {
    return ex.parse(e, t);
  }
  function tM(e, t, s) {
    if (typeof e == "string") {
      s = t;
      t = e;
      e = null;
    }
    let a = ex.getFragmentParser(e, s);
    a.tokenizer.write(t, true);
    return a.getFragment();
  }
  require.d(exports, {
    serializeOuter: function () {
      return tf;
    },
    htmlConstants: function () {
      return U;
    },
    serialize: function () {
      return tL;
    },
    tokenizerStates: function () {
      return ee;
    },
    Parser: function () {
      return ex;
    },
    tokenTypes: function () {
      return H;
    },
    parse: function () {
      return tP;
    },
    parseFragment: function () {
      return tM;
    }
  });
  require.r(H);
  require.d(H, {
    i: function () {
      return I;
    },
    F: function () {
      return v;
    }
  });
  require.r(U);
  require.d(U, {
    ATTRS: function () {
      return f;
    },
    DOCUMENT_MODE: function () {
      return g;
    },
    NS: function () {
      return L;
    },
    NUMBERED_HEADERS: function () {
      return j;
    },
    SPECIAL_ELEMENTS: function () {
      return J;
    },
    TAG_ID: function () {
      return P;
    },
    TAG_NAMES: function () {
      return k;
    },
    getTagID: function () {
      return V;
    },
    hasUnescapedText: function () {
      return $;
    }
  });
}