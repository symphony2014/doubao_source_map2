// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34249.9008a5ba.js
         * chunkId: 34249
         * moduleId: 550462
         */
module.exports = function (module, exports, require) {
  function e(E) {
    var t = [];
    E.split(" ").forEach(function (E) {
      t.push({
        name: E
      });
    });
    return t;
  }
  var O = e("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL");
  var i = e("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");
  function A(E, t) {
    var R;
    for (R = E.length - 1; R >= 0; R--) {
      if (E[R].name === t.toUpperCase()) {
        return E[R];
      }
    }
  }
  let L = {
    name: "forth",
    startState: function () {
      return {
        state: "",
        base: 10,
        coreWordList: O,
        immediateWordList: i,
        wordList: []
      };
    },
    token: function (E, t) {
      var R;
      if (E.eatSpace()) {
        return null;
      }
      if (t.state === "") {
        if (E.match(/^(\]|:NONAME)(\s|$)/i)) {
          t.state = " compilation";
          return "builtin";
        }
        if (R = E.match(/^(\:)\s+(\S+)(\s|$)+/)) {
          t.wordList.push({
            name: R[2].toUpperCase()
          });
          t.state = " compilation";
          return "def";
        }
        if (R = E.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i)) {
          t.wordList.push({
            name: R[2].toUpperCase()
          });
          return "def";
        }
        if (R = E.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/)) {
          return "builtin";
        }
      } else {
        if (E.match(/^(\;|\[)(\s)/)) {
          t.state = "";
          E.backUp(1);
          return "builtin";
        }
        if (E.match(/^(\;|\[)($)/)) {
          t.state = "";
          return "builtin";
        }
        if (E.match(/^(POSTPONE)\s+\S+(\s|$)+/)) {
          return "builtin";
        }
      }
      if (R = E.match(/^(\S+)(\s+|$)/)) {
        if (A(t.wordList, R[1]) !== undefined) {
          return "variable";
        } else if (R[1] === "\\") {
          E.skipToEnd();
          return "comment";
        } else if (A(t.coreWordList, R[1]) !== undefined) {
          return "builtin";
        } else if (A(t.immediateWordList, R[1]) !== undefined) {
          return "keyword";
        } else if (R[1] === "(") {
          E.eatWhile(function (E) {
            return E !== ")";
          });
          E.eat(")");
          return "comment";
        } else if (R[1] === ".(") {
          E.eatWhile(function (E) {
            return E !== ")";
          });
          E.eat(")");
          return "string";
        } else if (R[1] === "S\"" || R[1] === ".\"" || R[1] === "C\"") {
          E.eatWhile(function (E) {
            return E !== "\"";
          });
          E.eat("\"");
          return "string";
        } else if (R[1] - 68719476735) {
          return "number";
        } else {
          return "atom";
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    forth: function () {
      return L;
    }
  });
}