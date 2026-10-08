// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useObservableValue'
// - Renamed export 'P' to 'useObservableState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 48721
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var observableInitialValue = require("observable-initial-value") /*id: 509357*/;
  var behaviorSubjectWrapper = require("behavior-subject-wrapper") /*id: 633889*/;
  let d = (e, i) => {
    let n = isFunctionUtil_1.isFunction(e) ? e() : e;
    let [d = i, u] = reactCoreLibraryReexport.useState(() => observableInitialValue.hasInitialValue(n) ? n.initialValue : n instanceof behaviorSubjectClass.BehaviorSubject || n instanceof behaviorSubjectWrapper.BehaviorWrapper ? n.value : undefined);
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let [p, f] = reactCoreLibraryReexport.useState(false);
    let v = functionInvoker.invoke(() => n instanceof behaviorSubjectWrapper.BehaviorWrapper ? n.reactive : n);
    reactCoreLibraryReexport.useEffect(() => {
      if (!v) {
        return;
      }
      let e = v.subscribe({
        next(e) {
          u(e);
        },
        error() {
          g(true);
        },
        complete() {
          f(true);
        }
      });
      return () => {
        e.unsubscribe();
      };
    }, [n]);
    return {
      value: d,
      isError: h,
      isFinished: p
    };
  };
  let u = (e, i) => {
    let {
      value: n
    } = d(e, i);
    return n;
  };
  require.d(exports, {
    useObservableValue: function () {
      return u;
    },
    useObservableState: function () {
      return d;
    }
  });
}