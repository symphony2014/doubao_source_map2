// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'checkArxivPdfUrl'
// - Renamed export 'J' to 'getArxivPdfStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 82103
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var arxivPdfUrlChecker = require("arxiv-pdf-url-checker") /*id: 560444*/;
  let u = new Map();
  let c = new Map();
  let d = e => u.get(e);
  let _ = async e => {
    let t = c.get(e);
    if (t) {
      return t;
    }
    let n = 0;
    let i = async () => {
      try {
        var l;
        var o;
        let n = await apiServicesCollection.SamanthaApiService.SniffUrl({
          urls: [e]
        });
        let i = (o = n.data) === null || o === undefined ? undefined : (l = o.results) === null || l === undefined ? undefined : l.find(t => t.url === e)?.ContentType;
        if (isNullishCheck.isNil(i) || !i) {
          throw Error("Invalid Response.");
        }
        return /^application\/pdf\b/.test(i);
      } catch (e) {
        if (n > 1) {
          return false;
        }
        n++;
        return await i();
      }
    };
    let l = i();
    c.set(e, l);
    let o = await l;
    u.set(e, o);
    c.delete(e);
    return o;
  };
  let p = e => {
    e = arxivUrlNormalizer.normalizeArxivUrl(e);
    let [t, n] = reactCoreLibraryReexport.useState(0);
    let r = () => {
      n(t + 1);
    };
    let a = !!e && !!urlParamUtils.validateUrl(e, {
      allowedProtocols: ["https:"]
    }) && d(e);
    if (a === undefined) {
      _(e).then(() => {
        r();
      });
      return arxivPdfUrlChecker.isPdfUrl(e);
    } else {
      return a;
    }
  };
  let f = async e => {
    let t = urlParamUtils.validateUrl(e, {
      allowedProtocols: ["https:"]
    }) && d(e);
    if (t !== undefined) {
      return t;
    } else {
      return t = await _(e);
    }
  };
  require.d(exports, {
    checkArxivPdfUrl: function () {
      return p;
    },
    getArxivPdfStatus: function () {
      return f;
    }
  });
}