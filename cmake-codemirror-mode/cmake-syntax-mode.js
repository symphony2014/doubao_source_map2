// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 77184.ce9848f4.js
         * chunkId: 77184
         * moduleId: 706779
         */
module.exports = function (module, exports, require) {
  var i = /({)?[a-zA-Z0-9_]+(})?/;
  function a(n, e) {
    var t;
    var i;
    var a = false;
    while (!n.eol() && (t = n.next()) != e.pending) {
      if (t === "$" && i != "\\" && e.pending == "\"") {
        a = true;
        break;
      }
      i = t;
    }
    if (a) {
      n.backUp(1);
    }
    if (t == e.pending) {
      e.continueString = false;
    } else {
      e.continueString = true;
    }
    return "string";
  }
  let r = {
    name: "cmake",
    startState: function () {
      return {
        inDefinition: false,
        inInclude: false,
        continueString: false,
        pending: false
      };
    },
    token: function (n, e) {
      var t;
      var r;
      var c;
      if (n.eatSpace()) {
        return null;
      } else {
        t = n;
        r = e;
        if ((c = t.next()) === "$") {
          if (t.match(i)) {
            return "variableName.special";
          } else {
            return "variable";
          }
        } else if (r.continueString) {
          t.backUp(1);
          return a(t, r);
        } else if (t.match(/(\s+)?\w+\(/) || t.match(/(\s+)?\w+\ \(/)) {
          t.backUp(1);
          return "def";
        } else if (c == "#") {
          t.skipToEnd();
          return "comment";
        } else if (c == "'" || c == "\"") {
          r.pending = c;
          return a(t, r);
        } else if (c == "(" || c == ")") {
          return "bracket";
        } else if (c.match(/[0-9]/)) {
          return "number";
        } else {
          t.eatWhile(/[\w-]/);
          return null;
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    cmake: function () {
      return r;
    }
  });
}