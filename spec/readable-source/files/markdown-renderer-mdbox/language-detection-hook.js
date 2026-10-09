// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useLanguageDetection'
// - Renamed export 'C' to 'retryWithDelay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 759514
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = ["ae", "aeb", "ajt", "apc", "apd", "ar", "ara", "arb", "arc", "arq", "ars", "ary", "arz", "ave", "avl", "bal", "bcc", "bej", "bft", "bgn", "bqi", "brh", "cja", "ckb", "cld", "dcc", "dgl", "div", "drw", "dv", "fa", "fas", "fia", "fub", "gbz", "gjk", "gju", "glk", "grc", "gwc", "gwt", "haz", "he", "heb", "hnd", "hno", "iw", "ji", "kas", "kby", "khw", "ks", "kvx", "kxp", "kzh", "lad", "lah", "lki", "lrc", "luz", "mde", "mfa", "mki", "mvy", "myz", "mzn", "nqo", "oru", "ota", "otk", "oui", "pal", "pbu", "per", "pes", "phl", "phn", "pnb", "pra", "prd", "prs", "ps", "pus", "rhg", "rmt", "scl", "sd", "sdh", "shu", "skr", "smp", "snd", "sog", "swb", "syr", "tnf", "trw", "ug", "uig", "ur", "urd", "wni", "xco", "xld", "xmn", "xmr", "xna", "xpr", "xsa", "ydd", "yi", "yid", "zdj"];
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  let o = function (e, t = 3, r = 1000) {
    return new Promise((n, l) => {
      e().then(n).catch(i => {
        setTimeout(() => {
          if (t === 1) {
            l(i);
            return;
          }
          o(e, t - 1, r).then(n, l);
        }, r);
      });
    });
  };
  let s = ["code", "inlineCode", "math", "inlineMath"];
  let u = e => RegExp(`^[^A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{2B8}\u{300}-\u{590}\u{800}-\u{1FFF}\u{2C00}-\u{FB1C}\u{FDFE}-\u{FE6F}\u{FEFD}-\u{FFFF}]*[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]`).test(e);
  let d = async e => {
    try {
      let t = markdownParserSerializer.extractText(e, {
        filter: e => !markdownParserSerializer.hasValue(e) || !s.includes(e.type)
      }).trim();
      let n = jsUtilFunctions.getProperty(t.split("\n"), 0);
      if (!n) {
        return false;
      }
      let {
        franc: d
      } = await o(() => require.e("language-detection") /*id: 25841*/.then(require.bind(require, "language-detection-module") /*id: 433535*/));
      let c = d(n, {
        minLength: 20
      });
      if (c === "und") {
        return u(n.charAt(0));
      }
      return l.includes(c);
    } catch (e) {
      return false;
    }
  };
  let c = e => {
    let [t, r] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        (async () => {
          r(await d(e));
        })();
      } else {
        r(false);
      }
    }, [e]);
    return t;
  };
  require.d(exports, {
    useLanguageDetection: function () {
      return c;
    },
    retryWithDelay: function () {
      return o;
    }
  });
}