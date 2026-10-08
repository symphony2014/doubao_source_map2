// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42279.5216c3eb.js
         * chunkId: 42279
         * moduleId: 978282
         */
module.exports = function (module, exports, require) {
  let r = {
    name: "toml",
    startState: function () {
      return {
        inString: false,
        stringType: "",
        lhs: true,
        inArray: 0
      };
    },
    token: function (e, t) {
      if (!t.inString && (e.peek() == "\"" || e.peek() == "'")) {
        t.stringType = e.peek();
        e.next();
        t.inString = true;
      }
      if (e.sol() && t.inArray === 0) {
        t.lhs = true;
      }
      if (t.inString) {
        while (t.inString && !e.eol()) {
          if (e.peek() === t.stringType) {
            e.next();
            t.inString = false;
          } else if (e.peek() === "\\") {
            e.next();
            e.next();
          } else {
            e.match(/^.[^\\\"\']*/);
          }
        }
        if (t.lhs) {
          return "property";
        } else {
          return "string";
        }
      }
      if (t.inArray && e.peek() === "]") {
        e.next();
        t.inArray--;
        return "bracket";
      }
      if (t.lhs && e.peek() === "[" && e.skipTo("]")) {
        e.next();
        if (e.peek() === "]") {
          e.next();
        }
        return "atom";
      }
      if (e.peek() === "#") {
        e.skipToEnd();
        return "comment";
      }
      if (e.eatSpace()) ;else if (t.lhs && e.eatWhile(function (e) {
        return e != "=" && e != " ";
      })) {
        return "property";
      } else if (t.lhs && e.peek() === "=") {
        e.next();
        t.lhs = false;
      } else {
        if (!t.lhs && e.match(/^\d\d\d\d[\d\-\:\.T]*Z/) || !t.lhs && (e.match("true") || e.match("false"))) {
          return "atom";
        }
        if (!t.lhs && e.peek() === "[") {
          t.inArray++;
          e.next();
          return "bracket";
        }
        if (!t.lhs && e.match(/^\-?\d+(?:\.\d+)?/)) {
          return "number";
        }
        if (!e.eatSpace()) {
          e.next();
        }
      }
      return null;
    },
    languageData: {
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    toml: function () {
      return r;
    }
  });
}