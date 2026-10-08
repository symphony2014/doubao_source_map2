// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useViewportSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 887539
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var documentOverflowAndDimensionsUtils = require("document-overflow-and-dimensions-utils") /*id: 319019*/;
  let u = (() => {
    let e = () => {
      if (window.visualViewport) {
        let {
          width: e,
          height: n,
          offsetTop: r,
          offsetLeft: o
        } = window.visualViewport;
        return {
          width: e,
          height: n,
          offsetTop: r,
          offsetLeft: o
        };
      }
      return documentOverflowAndDimensionsUtils.getDocumentDimensions();
    };
    let n = e();
    let r = [];
    let l = () => {
      let i = e();
      if (!deepEqualUtil_1.deepEqual(n, i)) {
        n = i;
        r.forEach(e => e(i));
      }
    };
    let u = debounceUtil_1_1.debounce(l, 200);
    let a = e => {
      let n = e ? "addEventListener" : "removeEventListener";
      window[n]("resize", l);
      window[n]("focusin", u);
      window[n]("scroll", l);
    };
    return {
      on: e => {
        if (!r.length) {
          a(true);
        }
        r.push(e);
        l();
        return () => {
          if (!(r = r.filter(n => n !== e)).length) {
            a(false);
          }
        };
      },
      get viewportSize() {
        return n;
      }
    };
  })();
  function a(e) {
    let [n, r] = reactCoreLibraryReexport.useState(u.viewportSize);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        r(u.viewportSize);
        return u.on(r);
      }
    }, [e]);
    return n;
  }
  require.d(exports, {
    useViewportSize: function () {
      return a;
    }
  });
}