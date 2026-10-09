// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'RegExpVisitor'
// - Renamed export 'O' to 'RegExpParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 582787
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return e.charCodeAt(0);
  }
  function i(e, t) {
    if (Array.isArray(e)) {
      e.forEach(function (e) {
        t.push(e);
      });
    } else {
      t.push(e);
    }
  }
  function a(e, t) {
    if (e[t] === true) {
      throw "duplicate flag " + t;
    }
    e[t];
    e[t] = true;
  }
  function s(e) {
    if (e === undefined) {
      throw Error("Internal Error - Should never get here!");
    }
    return true;
  }
  function o() {
    throw Error("Internal Error - Should never get here!");
  }
  function l(e) {
    return e.type === "Character";
  }
  let u = [];
  for (let e = n("0"); e <= n("9"); e++) {
    u.push(e);
  }
  let c = [n("_")].concat(u);
  for (let e = n("a"); e <= n("z"); e++) {
    c.push(e);
  }
  for (let e = n("A"); e <= n("Z"); e++) {
    c.push(e);
  }
  let d = [n(" "), n("\f"), n("\n"), n("\r"), n("\t"), n(""), n("\t"), n("\xA0"), n("\u1680"), n("\u2000"), n("\u2001"), n("\u2002"), n("\u2003"), n("\u2004"), n("\u2005"), n("\u2006"), n("\u2007"), n("\u2008"), n("\u2009"), n("\u200A"), n("\u2028"), n("\u2029"), n("\u202F"), n("\u205F"), n("\u3000"), n("﻿")];
  let h = /[0-9a-fA-F]/;
  let f = /[0-9]/;
  let p = /[1-9]/;
  class m {
    constructor() {
      this.idx = 0;
      this.input = "";
      this.groupIdx = 0;
    }
    saveState() {
      return {
        idx: this.idx,
        input: this.input,
        groupIdx: this.groupIdx
      };
    }
    restoreState(e) {
      this.idx = e.idx;
      this.input = e.input;
      this.groupIdx = e.groupIdx;
    }
    pattern(e) {
      this.idx = 0;
      this.input = e;
      this.groupIdx = 0;
      this.consumeChar("/");
      let t = this.disjunction();
      this.consumeChar("/");
      let r = {
        type: "Flags",
        loc: {
          begin: this.idx,
          end: e.length
        },
        global: false,
        ignoreCase: false,
        multiLine: false,
        unicode: false,
        sticky: false
      };
      while (this.isRegExpFlag()) {
        switch (this.popChar()) {
          case "g":
            a(r, "global");
            break;
          case "i":
            a(r, "ignoreCase");
            break;
          case "m":
            a(r, "multiLine");
            break;
          case "u":
            a(r, "unicode");
            break;
          case "y":
            a(r, "sticky");
        }
      }
      if (this.idx !== this.input.length) {
        throw Error("Redundant input: " + this.input.substring(this.idx));
      }
      return {
        type: "Pattern",
        flags: r,
        value: t,
        loc: this.loc(0)
      };
    }
    disjunction() {
      let e = [];
      let t = this.idx;
      for (e.push(this.alternative()); this.peekChar() === "|";) {
        this.consumeChar("|");
        e.push(this.alternative());
      }
      return {
        type: "Disjunction",
        value: e,
        loc: this.loc(t)
      };
    }
    alternative() {
      let e = [];
      let t = this.idx;
      while (this.isTerm()) {
        e.push(this.term());
      }
      return {
        type: "Alternative",
        value: e,
        loc: this.loc(t)
      };
    }
    term() {
      if (this.isAssertion()) {
        return this.assertion();
      } else {
        return this.atom();
      }
    }
    assertion() {
      let e = this.idx;
      switch (this.popChar()) {
        case "^":
          return {
            type: "StartAnchor",
            loc: this.loc(e)
          };
        case "$":
          return {
            type: "EndAnchor",
            loc: this.loc(e)
          };
        case "\\":
          switch (this.popChar()) {
            case "b":
              return {
                type: "WordBoundary",
                loc: this.loc(e)
              };
            case "B":
              return {
                type: "NonWordBoundary",
                loc: this.loc(e)
              };
          }
          throw Error("Invalid Assertion Escape");
        case "(":
          let t;
          this.consumeChar("?");
          switch (this.popChar()) {
            case "=":
              t = "Lookahead";
              break;
            case "!":
              t = "NegativeLookahead";
          }
          s(t);
          let r = this.disjunction();
          this.consumeChar(")");
          return {
            type: t,
            value: r,
            loc: this.loc(e)
          };
      }
      return o();
    }
    quantifier(e = false) {
      let t;
      let r = this.idx;
      switch (this.popChar()) {
        case "*":
          t = {
            atLeast: 0,
            atMost: Infinity
          };
          break;
        case "+":
          t = {
            atLeast: 1,
            atMost: Infinity
          };
          break;
        case "?":
          t = {
            atLeast: 0,
            atMost: 1
          };
          break;
        case "{":
          let n = this.integerIncludingZero();
          switch (this.popChar()) {
            case "}":
              t = {
                atLeast: n,
                atMost: n
              };
              break;
            case ",":
              t = this.isDigit() ? {
                atLeast: n,
                atMost: this.integerIncludingZero()
              } : {
                atLeast: n,
                atMost: Infinity
              };
              this.consumeChar("}");
          }
          if (e === true && t === undefined) {
            return;
          }
          s(t);
      }
      if ((e !== true || t !== undefined) && s(t)) {
        if (this.peekChar(0) === "?") {
          this.consumeChar("?");
          t.greedy = false;
        } else {
          t.greedy = true;
        }
        t.type = "Quantifier";
        t.loc = this.loc(r);
        return t;
      }
    }
    atom() {
      let e;
      let t = this.idx;
      switch (this.peekChar()) {
        case ".":
          e = this.dotAll();
          break;
        case "\\":
          e = this.atomEscape();
          break;
        case "[":
          e = this.characterClass();
          break;
        case "(":
          e = this.group();
      }
      if (e === undefined && this.isPatternCharacter()) {
        e = this.patternCharacter();
      }
      if (s(e)) {
        e.loc = this.loc(t);
        if (this.isQuantifier()) {
          e.quantifier = this.quantifier();
        }
        return e;
      } else {
        return o();
      }
    }
    dotAll() {
      this.consumeChar(".");
      return {
        type: "Set",
        complement: true,
        value: [n("\n"), n("\r"), n("\u2028"), n("\u2029")]
      };
    }
    atomEscape() {
      this.consumeChar("\\");
      switch (this.peekChar()) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return this.decimalEscapeAtom();
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    decimalEscapeAtom() {
      return {
        type: "GroupBackReference",
        value: this.positiveInteger()
      };
    }
    characterClassEscape() {
      let e;
      let t = false;
      switch (this.popChar()) {
        case "d":
          e = u;
          break;
        case "D":
          e = u;
          t = true;
          break;
        case "s":
          e = d;
          break;
        case "S":
          e = d;
          t = true;
          break;
        case "w":
          e = c;
          break;
        case "W":
          e = c;
          t = true;
      }
      if (s(e)) {
        return {
          type: "Set",
          value: e,
          complement: t
        };
      } else {
        return o();
      }
    }
    controlEscapeAtom() {
      let e;
      switch (this.popChar()) {
        case "f":
          e = n("\f");
          break;
        case "n":
          e = n("\n");
          break;
        case "r":
          e = n("\r");
          break;
        case "t":
          e = n("\t");
          break;
        case "v":
          e = n("");
      }
      if (s(e)) {
        return {
          type: "Character",
          value: e
        };
      } else {
        return o();
      }
    }
    controlLetterEscapeAtom() {
      this.consumeChar("c");
      let e = this.popChar();
      if (/[a-zA-Z]/.test(e) === false) {
        throw Error("Invalid ");
      }
      return {
        type: "Character",
        value: e.toUpperCase().charCodeAt(0) - 64
      };
    }
    nulCharacterAtom() {
      this.consumeChar("0");
      return {
        type: "Character",
        value: n("\0")
      };
    }
    hexEscapeSequenceAtom() {
      this.consumeChar("x");
      return this.parseHexDigits(2);
    }
    regExpUnicodeEscapeSequenceAtom() {
      this.consumeChar("u");
      return this.parseHexDigits(4);
    }
    identityEscapeAtom() {
      return {
        type: "Character",
        value: n(this.popChar())
      };
    }
    classPatternCharacterAtom() {
      switch (this.peekChar()) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "\\":
        case "]":
          throw Error("TBD");
        default:
          return {
            type: "Character",
            value: n(this.popChar())
          };
      }
    }
    characterClass() {
      let e = [];
      let t = false;
      this.consumeChar("[");
      if (this.peekChar(0) === "^") {
        this.consumeChar("^");
        t = true;
      }
      while (this.isClassAtom()) {
        let t = this.classAtom();
        t.type;
        if (l(t) && this.isRangeDash()) {
          this.consumeChar("-");
          let r = this.classAtom();
          r.type;
          if (l(r)) {
            if (r.value < t.value) {
              throw Error("Range out of order in character class");
            }
            e.push({
              from: t.value,
              to: r.value
            });
          } else {
            i(t.value, e);
            e.push(n("-"));
            i(r.value, e);
          }
        } else {
          i(t.value, e);
        }
      }
      this.consumeChar("]");
      return {
        type: "Set",
        complement: t,
        value: e
      };
    }
    classAtom() {
      switch (this.peekChar()) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          throw Error("TBD");
        case "\\":
          return this.classEscape();
        default:
          return this.classPatternCharacterAtom();
      }
    }
    classEscape() {
      this.consumeChar("\\");
      switch (this.peekChar()) {
        case "b":
          this.consumeChar("b");
          return {
            type: "Character",
            value: n("\b")
          };
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    group() {
      let e = true;
      this.consumeChar("(");
      if (this.peekChar(0) === "?") {
        this.consumeChar("?");
        this.consumeChar(":");
        e = false;
      } else {
        this.groupIdx++;
      }
      let t = this.disjunction();
      this.consumeChar(")");
      let r = {
        type: "Group",
        capturing: e,
        value: t
      };
      if (e) {
        r.idx = this.groupIdx;
      }
      return r;
    }
    positiveInteger() {
      let e = this.popChar();
      if (p.test(e) === false) {
        throw Error("Expecting a positive integer");
      }
      while (f.test(this.peekChar(0))) {
        e += this.popChar();
      }
      return parseInt(e, 10);
    }
    integerIncludingZero() {
      let e = this.popChar();
      if (f.test(e) === false) {
        throw Error("Expecting an integer");
      }
      while (f.test(this.peekChar(0))) {
        e += this.popChar();
      }
      return parseInt(e, 10);
    }
    patternCharacter() {
      let e = this.popChar();
      switch (e) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
          throw Error("TBD");
        default:
          return {
            type: "Character",
            value: n(e)
          };
      }
    }
    isRegExpFlag() {
      switch (this.peekChar(0)) {
        case "g":
        case "i":
        case "m":
        case "u":
        case "y":
          return true;
        default:
          return false;
      }
    }
    isRangeDash() {
      return this.peekChar() === "-" && this.isClassAtom(1);
    }
    isDigit() {
      return f.test(this.peekChar(0));
    }
    isClassAtom(e = 0) {
      switch (this.peekChar(e)) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    isTerm() {
      return this.isAtom() || this.isAssertion();
    }
    isAtom() {
      if (this.isPatternCharacter()) {
        return true;
      }
      switch (this.peekChar(0)) {
        case ".":
        case "\\":
        case "[":
        case "(":
          return true;
        default:
          return false;
      }
    }
    isAssertion() {
      switch (this.peekChar(0)) {
        case "^":
        case "$":
          return true;
        case "\\":
          switch (this.peekChar(1)) {
            case "b":
            case "B":
              return true;
            default:
              return false;
          }
        case "(":
          return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
        default:
          return false;
      }
    }
    isQuantifier() {
      let e = this.saveState();
      try {
        return this.quantifier(true) !== undefined;
      } catch (e) {
        return false;
      } finally {
        this.restoreState(e);
      }
    }
    isPatternCharacter() {
      switch (this.peekChar()) {
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
        case "/":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    parseHexDigits(e) {
      let t = "";
      for (let r = 0; r < e; r++) {
        let e = this.popChar();
        if (h.test(e) === false) {
          throw Error("Expecting a HexDecimal digits");
        }
        t += e;
      }
      return {
        type: "Character",
        value: parseInt(t, 16)
      };
    }
    peekChar(e = 0) {
      return this.input[this.idx + e];
    }
    popChar() {
      let e = this.peekChar(0);
      this.consumeChar(undefined);
      return e;
    }
    consumeChar(e) {
      if (e !== undefined && this.input[this.idx] !== e) {
        throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
      }
      if (this.idx >= this.input.length) {
        throw Error("Unexpected end of input");
      }
      this.idx++;
    }
    loc(e) {
      return {
        begin: e,
        end: this.idx
      };
    }
  }
  class g {
    visitChildren(e) {
      for (let t in e) {
        let r = e[t];
        if (e.hasOwnProperty(t)) {
          if (r.type !== undefined) {
            this.visit(r);
          } else if (Array.isArray(r)) {
            r.forEach(e => {
              this.visit(e);
            }, this);
          }
        }
      }
    }
    visit(e) {
      switch (e.type) {
        case "Pattern":
          this.visitPattern(e);
          break;
        case "Flags":
          this.visitFlags(e);
          break;
        case "Disjunction":
          this.visitDisjunction(e);
          break;
        case "Alternative":
          this.visitAlternative(e);
          break;
        case "StartAnchor":
          this.visitStartAnchor(e);
          break;
        case "EndAnchor":
          this.visitEndAnchor(e);
          break;
        case "WordBoundary":
          this.visitWordBoundary(e);
          break;
        case "NonWordBoundary":
          this.visitNonWordBoundary(e);
          break;
        case "Lookahead":
          this.visitLookahead(e);
          break;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          break;
        case "Character":
          this.visitCharacter(e);
          break;
        case "Set":
          this.visitSet(e);
          break;
        case "Group":
          this.visitGroup(e);
          break;
        case "GroupBackReference":
          this.visitGroupBackReference(e);
          break;
        case "Quantifier":
          this.visitQuantifier(e);
      }
      this.visitChildren(e);
    }
    visitPattern(e) {}
    visitFlags(e) {}
    visitDisjunction(e) {}
    visitAlternative(e) {}
    visitStartAnchor(e) {}
    visitEndAnchor(e) {}
    visitWordBoundary(e) {}
    visitNonWordBoundary(e) {}
    visitLookahead(e) {}
    visitNegativeLookahead(e) {}
    visitCharacter(e) {}
    visitSet(e) {}
    visitGroup(e) {}
    visitGroupBackReference(e) {}
    visitQuantifier(e) {}
  }
  require.d(exports, {
    RegExpVisitor: function () {
      return g;
    },
    RegExpParser: function () {
      return m;
    }
  });
}