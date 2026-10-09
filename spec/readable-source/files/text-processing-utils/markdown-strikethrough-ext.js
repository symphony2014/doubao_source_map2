// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'strikeSerialize'
// - Renamed export 'v' to 'strikeSyntax'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 604648
         */
module.exports = function (module, exports, require) {
  let n = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
  function i() {
    return {
      canContainEols: ["delete"],
      enter: {
        strikethrough: u
      },
      exit: {
        strikethrough: a
      }
    };
  }
  function o() {
    return {
      unsafe: [{
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: n
      }],
      handlers: {
        delete: c
      }
    };
  }
  function u(e) {
    this.enter({
      type: "delete",
      children: []
    }, e);
  }
  function a(e) {
    this.exit(e);
  }
  function c(e, t, r, n) {
    let i = r.createTracker(n);
    let o = r.enter("strikethrough");
    let u = i.move("~~");
    u += r.containerPhrasing(e, {
      ...i.current(),
      before: u,
      after: "~"
    });
    u += i.move("~~");
    o();
    return u;
  }
  c.peek = function () {
    return "~";
  };
  require.d(exports, {
    strikeSerialize: function () {
      return o;
    },
    strikeSyntax: function () {
      return i;
    }
  });
}