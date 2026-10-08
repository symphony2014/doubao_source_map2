// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 6146.36a3d4ba.js
         * chunkId: 6146
         * moduleId: 969533
         */
module.exports = function (module, exports, require) {
  var n = "[a-zA-Z\\$][a-zA-Z0-9\\$]*";
  var c = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)";
  var m = "(?:`(?:`?" + c + ")?)";
  var o = RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)" + m + "?(?:\\*\\^[+-]?\\d+)?))");
  var r = RegExp("(?:" + c + m + "?(?:\\*\\^[+-]?\\d+)?)");
  var z = RegExp("(?:`?)(?:" + n + ")(?:`(?:" + n + "))*(?:`?)");
  function A(e, a) {
    var t;
    if ((t = e.next()) === "\"") {
      a.tokenize = Z;
      return a.tokenize(e, a);
    } else if (t === "(" && e.eat("*")) {
      a.commentLevel++;
      a.tokenize = $;
      return a.tokenize(e, a);
    } else {
      e.backUp(1);
      if (e.match(o, true, false) || e.match(r, true, false)) {
        return "number";
      } else if (e.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
        return "atom";
      } else if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false)) {
        return "meta";
      } else if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false)) {
        return "string.special";
      } else if (e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false) || e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
        return "variableName.special";
      } else if (e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
        return "character";
      } else if (e.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
        return "bracket";
      } else if (e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
        return "variableName.constant";
      } else if (e.match(z, true, false)) {
        return "keyword";
      } else if (e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
        return "operator";
      } else {
        e.next();
        return "error";
      }
    }
  }
  function Z(e, a) {
    var t;
    var n = false;
    var c = false;
    while ((t = e.next()) != null) {
      if (t === "\"" && !c) {
        n = true;
        break;
      }
      c = !c && t === "\\";
    }
    if (n && !c) {
      a.tokenize = A;
    }
    return "string";
  }
  function $(e, a) {
    var t;
    var n;
    while (a.commentLevel > 0 && (n = e.next()) != null) {
      if (t === "(" && n === "*") {
        a.commentLevel++;
      }
      if (t === "*" && n === ")") {
        a.commentLevel--;
      }
      t = n;
    }
    if (a.commentLevel <= 0) {
      a.tokenize = A;
    }
    return "comment";
  }
  let i = {
    name: "mathematica",
    startState: function () {
      return {
        tokenize: A,
        commentLevel: 0
      };
    },
    token: function (e, a) {
      if (e.eatSpace()) {
        return null;
      } else {
        return a.tokenize(e, a);
      }
    },
    languageData: {
      commentTokens: {
        block: {
          open: "(*",
          close: "*)"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    mathematica: function () {
      return i;
    }
  });
}