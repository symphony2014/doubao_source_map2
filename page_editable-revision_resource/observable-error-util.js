// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'wrapSourceError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 844891
         */
module.exports = function (module, exports, require) {
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var safeObservableOperator = require("safe-observable-operator") /*id: 15361*/;
  let l = Symbol.for("__DOCX_UTILS_RXJS_IS_SOURCE_ERROR__");
  function s(e, i) {
    return o => {
      let s = new observableSubjectClass.Subject();
      o.subscribe(s);
      return e(s.pipe(safeObservableOperator.createSafeOperator(e => {
        let i = Error();
        i.innerError = e;
        i[l] = true;
        throw i;
      }))).pipe(safeObservableOperator.createSafeOperator((e, o) => {
        let n = !!e[l];
        i(n, n ? e.innerError : e);
        if (n) {
          throw e.innerError;
        }
        return o;
      }));
    };
  }
  require.d(exports, {
    wrapSourceError: function () {
      return s;
    }
  });
}