// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17963.28795088.js
         * chunkId: 17963
         * moduleId: 287217
         */
module.exports = function (module, exports, require) {
  function a(t) {
    var e = t.match(/^\s*\S/);
    t.skipToEnd();
    if (e) {
      return "error";
    } else {
      return null;
    }
  }
  let n = {
    name: "asciiarmor",
    token: function (t, e) {
      var r;
      if (e.state == "top") {
        if (t.sol() && (r = t.match(/^-----BEGIN (.*)?-----\s*$/))) {
          e.state = "headers";
          e.type = r[1];
          return "tag";
        } else {
          return a(t);
        }
      }
      if (e.state == "headers") {
        if (t.sol() && t.match(/^\w+:/)) {
          e.state = "header";
          return "atom";
        }
        var n = a(t);
        if (n) {
          e.state = "body";
        }
        return n;
      }
      if (e.state == "header") {
        t.skipToEnd();
        e.state = "headers";
        return "string";
      }
      if (e.state == "body") {
        if (t.sol() && (r = t.match(/^-----END (.*)?-----\s*$/))) {
          if (r[1] != e.type) {
            return "error";
          } else {
            e.state = "end";
            return "tag";
          }
        } else if (t.eatWhile(/[A-Za-z0-9+\/=]/)) {
          return null;
        } else {
          t.next();
          return "error";
        }
      }
      if (e.state == "end") {
        return a(t);
      }
    },
    blankLine: function (t) {
      if (t.state == "headers") {
        t.state = "body";
      }
    },
    startState: function () {
      return {
        state: "top",
        type: null
      };
    }
  };
  require.r(exports);
  require.d(exports, {
    asciiArmor: function () {
      return n;
    }
  });
}