// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'scrollEndHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16516.625a9212.js
         * chunkId: 16516
         * moduleId: 580557
         */
module.exports = function (module, exports, require) {
  var codemirrorReactWrapper = require("codemirror-react-wrapper") /*id: 479374*/;
  let n = function (e, t = {}) {
    let {
      threshold: r = 4
    } = t;
    let n = true;
    return codemirrorReactWrapper.EditorView.domEventHandlers({
      scroll: (t, o) => {
        let {
          scrollDOM: i
        } = o;
        let {
          scrollHeight: a
        } = i;
        let {
          clientHeight: l
        } = i;
        let {
          scrollTop: c
        } = i;
        let s = c + l + r >= a;
        if (n !== s) {
          n = s;
          if (e != null) {
            e(s);
          }
        }
      }
    });
  };
  require.d(exports, {
    scrollEndHandler: function () {
      return n;
    }
  });
}