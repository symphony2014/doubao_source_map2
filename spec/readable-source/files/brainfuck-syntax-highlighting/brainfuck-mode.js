// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79138.3453a285.js
         * chunkId: 79138
         * moduleId: 323164
         */
module.exports = function (module, exports, require) {
  var r = "><+-.,[]".split("");
  let i = {
    name: "brainfuck",
    startState: function () {
      return {
        commentLine: false,
        left: 0,
        right: 0,
        commentLoop: false
      };
    },
    token: function (e, n) {
      if (e.eatSpace()) {
        return null;
      }
      if (e.sol()) {
        n.commentLine = false;
      }
      var t = e.next().toString();
      if (r.indexOf(t) === -1) {
        n.commentLine = true;
        if (e.eol()) {
          n.commentLine = false;
        }
        return "comment";
      }
      if (n.commentLine === true) {
        if (e.eol()) {
          n.commentLine = false;
        }
        return "comment";
      }
      if (t === "]" || t === "[") {
        if (t === "[") {
          n.left++;
        } else {
          n.right++;
        }
        return "bracket";
      }
      if (t === "+" || t === "-") {
        return "keyword";
      }
      if (t === "<" || t === ">") {
        return "atom";
      }
      if (t === "." || t === ",") {
        return "def";
      }
      if (e.eol()) {
        n.commentLine = false;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    brainfuck: function () {
      return i;
    }
  });
}