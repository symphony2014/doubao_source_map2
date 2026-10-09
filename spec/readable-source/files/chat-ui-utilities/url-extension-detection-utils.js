// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qi' to 'useUrlExtension'
// - Renamed export 'xr' to 'isImageOrArxivUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 12177
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var arxivPdfUrlChecker = require("arxiv-pdf-url-checker") /*id: 560444*/;
  let c = () => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("mime") /*id: 65336*/.then(require.bind(require, "mime-type-utility") /*id: 703176*/).then(e => e.default),
    fallback: {
      default: () => ({
        getExtension: () => ""
      })
    }
  });
  let d = new Map();
  let _ = new Map();
  let p = async e => {
    if (d.has(e)) {
      return d.get(e) ?? "";
    }
    if (_.has(e)) {
      return _.get(e) ?? Promise.resolve("");
    }
    let i = 0;
    let l = async () => {
      try {
        var n;
        var o;
        let i = await apiServicesCollection.SamanthaApiService.SniffUrl({
          urls: [e]
        });
        let l = (o = i.data) === null || o === undefined ? undefined : (n = o.results) === null || n === undefined ? undefined : n.find(t => t.url === e)?.ContentType;
        if (isNullishCheck.isNil(l) || !l) {
          throw Error("Invalid ContentType");
        }
        return (await c()).getExtension(l) || "";
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "sniff_link_response_error",
          error: Error((t == null ? undefined : t.message) || ""),
          meta: {
            link: e,
            retryCount: String(i)
          }
        });
        if (i >= 10) {
          return "";
        }
        i++;
        await new Promise(e => {
          setTimeout(e, 300);
        });
        return await l();
      }
    };
    let o = l();
    _.set(e, o);
    let u = await o;
    d.set(e, u);
    _.delete(e);
    return u;
  };
  let f = e => {
    let t = e.match(/\.([^.]+)$/);
    if (t) {
      return t[1].toLowerCase().trim();
    } else {
      return "";
    }
  };
  let m = (e, t) => {
    let [n, r] = reactCoreLibraryReexport.useState(f(e));
    reactCoreLibraryReexport.useEffect(() => {
      let t = async () => {
        r(await p(e));
      };
      if (e) {
        t();
      }
    }, [e]);
    return reactCoreLibraryReexport.useMemo(() => ({
      ext: t && !t.includes(n) ? "" : n,
      originExt: n
    }), [n, t]);
  };
  let v = e => {
    if (arxivPdfUrlChecker.isArxivPdfUrl(e)) {
      return true;
    }
    let t = f(e);
    return fileTypeDetectionUtils.imageExtensions.includes(t) || false;
  };
  require.d(exports, {
    useUrlExtension: function () {
      return m;
    },
    isImageOrArxivUrl: function () {
      return v;
    }
  });
}