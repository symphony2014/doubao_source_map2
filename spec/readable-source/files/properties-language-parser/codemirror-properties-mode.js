// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80815.426e2278.js
         * chunkId: 80815
         * moduleId: 778562
         */
module.exports = function (module, exports, require) {
  let n = {
    name: "properties",
    token: function (t, e) {
      var i = t.sol() || e.afterSection;
      var n = t.eol();
      e.afterSection = false;
      if (i) {
        if (e.nextMultiline) {
          e.inMultiline = true;
          e.nextMultiline = false;
        } else {
          e.position = "def";
        }
      }
      if (n && !e.nextMultiline) {
        e.inMultiline = false;
        e.position = "def";
      }
      if (i) {
        while (t.eatSpace());
      }
      var o = t.next();
      if (i && (o === "#" || o === "!" || o === ";")) {
        e.position = "comment";
        t.skipToEnd();
        return "comment";
      } else if (i && o === "[") {
        e.afterSection = true;
        t.skipTo("]");
        t.eat("]");
        return "header";
      } else if (o === "=" || o === ":") {
        e.position = "quote";
        return null;
      } else {
        if (o === "\\" && e.position === "quote" && t.eol()) {
          e.nextMultiline = true;
        }
        return e.position;
      }
    },
    startState: function () {
      return {
        position: "def",
        nextMultiline: false,
        inMultiline: false,
        afterSection: false
      };
    }
  };
  require.r(exports);
  require.d(exports, {
    properties: function () {
      return n;
    }
  });
}