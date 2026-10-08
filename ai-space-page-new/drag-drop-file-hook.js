// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useDragDrop'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 35695
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let r = (e, t) => {
    var n;
    var r;
    let {
      canSendFile: o = false,
      canSendImage: l = false
    } = t || {};
    return (!!o || !!l) && (userAgentDeviceDetector.isWebKit() ? ((r = e.dataTransfer) === null || r === undefined ? undefined : (n = r.types) === null || n === undefined ? undefined : n.every(e => e === "Files")) || false : [...(e.dataTransfer?.items || [])].every(e => e.kind === "file"));
  };
  let o = e => {
    let {
      closeDelay: t = 100,
      canSendFile: i,
      canSendImage: a
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState(false);
    return {
      isOver: o,
      divProps: reactCoreLibraryReexport.useMemo(() => {
        let e;
        return {
          onDragEnter: t => {
            if (e) {
              clearTimeout(e);
            }
            if (r(t, {
              canSendFile: i,
              canSendImage: a
            })) {
              l(true);
            }
          },
          onDragOver: t => {
            if (e) {
              clearTimeout(e);
            }
            if (r(t, {
              canSendFile: i,
              canSendImage: a
            })) {
              l(true);
              t.preventDefault();
            }
          },
          onDragLeave: n => {
            if (e) {
              clearTimeout(e);
            }
            if (r(n, {
              canSendFile: i,
              canSendImage: a
            })) {
              if (t) {
                e = window.setTimeout(() => l(false), t);
              } else {
                l(false);
              }
            }
          },
          onDrop: t => {
            if (e) {
              clearTimeout(e);
            }
            if (r(t, {
              canSendFile: i,
              canSendImage: a
            })) {
              l(false);
              t.preventDefault();
            }
          }
        };
      }, [l, t, i])
    };
  };
  require.d(exports, {
    useDragDrop: function () {
      return o;
    }
  });
}