// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'tasklistTokenizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 563371
         */
module.exports = function (module, exports, require) {
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  let o = {
    name: "tasklistCheck",
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        if (n.previous === null && n._gfmTasklistFirstContentOfListItem) {
          e.enter("taskListCheck");
          e.enter("taskListCheckMarker");
          e.consume(t);
          e.exit("taskListCheckMarker");
          return o;
        } else {
          return r(t);
        }
      };
      function o(t) {
        if (charClassificationUtils.isWhitespaceOrNeg(t)) {
          e.enter("taskListCheckValueUnchecked");
          e.consume(t);
          e.exit("taskListCheckValueUnchecked");
          return u;
        } else if (t === 88 || t === 120) {
          e.enter("taskListCheckValueChecked");
          e.consume(t);
          e.exit("taskListCheckValueChecked");
          return u;
        } else {
          return r(t);
        }
      }
      function u(t) {
        if (t === 93) {
          e.enter("taskListCheckMarker");
          e.consume(t);
          e.exit("taskListCheckMarker");
          e.exit("taskListCheck");
          return c;
        } else {
          return r(t);
        }
      }
      function c(n) {
        if (charClassificationUtils.isInvalidChar(n)) {
          return t(n);
        } else if (charClassificationUtils.isSpaceLike(n)) {
          return e.check({
            tokenize: a
          }, t, r)(n);
        } else {
          return r(n);
        }
      }
    }
  };
  function u() {
    return {
      text: {
        91: o
      }
    };
  }
  function a(e, t, r) {
    return spaceLikeHandler.createSpaceHandler(e, function (e) {
      if (e === null) {
        return r(e);
      } else {
        return t(e);
      }
    }, "whitespace");
  }
  require.d(exports, {
    tasklistTokenizer: function () {
      return u;
    }
  });
}