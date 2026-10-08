// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useFpsMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 835333
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  let r = e => {
    let {
      interval: t = 1000,
      onChange: n
    } = e;
    let r = reactCoreLibraryReexport.useRef(-1);
    let i = reactCoreLibraryReexport.useRef(0);
    let a = reactCoreLibraryReexport.useRef(0);
    let s = reactCoreLibraryReexport.useRef(0);
    let d = reactFunctionMemoHook.useMemoizedCallback(function (e) {
      if (s.current === 0) {
        s.current = e;
      }
      a.current++;
      if (e - s.current >= t) {
        i.current = Math.round(a.current * 1000 / (e - s.current));
        if (n != null) {
          n(i.current);
        }
        a.current = 0;
        s.current = e;
      }
      r.current = window.requestAnimationFrame(d);
    });
    let c = reactFunctionMemoHook.useMemoizedCallback(() => {
      a.current = 0;
      s.current = 0;
      r.current = window.requestAnimationFrame(d);
    });
    let u = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (r.current) {
        window.cancelAnimationFrame(r.current);
      }
    });
    return {
      fps: i.current,
      start: c,
      stop: u
    };
  };
  require.d(exports, {
    useFpsMonitor: function () {
      return r;
    }
  });
}