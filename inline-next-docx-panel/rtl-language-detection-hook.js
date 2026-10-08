// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vr' to 'useTextDirection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 179231
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = ["ae", "aeb", "ajt", "apc", "apd", "ar", "ara", "arb", "arc", "arq", "ars", "ary", "arz", "ave", "avl", "bal", "bcc", "bej", "bft", "bgn", "bqi", "brh", "cja", "ckb", "cld", "dcc", "dgl", "div", "drw", "dv", "fa", "fas", "fia", "fub", "gbz", "gjk", "gju", "glk", "grc", "gwc", "gwt", "haz", "he", "heb", "hnd", "hno", "iw", "ji", "kas", "kby", "khw", "ks", "kvx", "kxp", "kzh", "lad", "lah", "lki", "lrc", "luz", "mde", "mfa", "mki", "mvy", "myz", "mzn", "nqo", "oru", "ota", "otk", "oui", "pal", "pbu", "per", "pes", "phl", "phn", "pnb", "pra", "prd", "prs", "ps", "pus", "rhg", "rmt", "scl", "sd", "sdh", "shu", "skr", "smp", "snd", "sog", "swb", "syr", "tnf", "trw", "ug", "uig", "ur", "urd", "wni", "xco", "xld", "xmn", "xmr", "xna", "xpr", "xsa", "ydd", "yi", "yid", "zdj"];
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let l = e => RegExp(`^[^A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{2B8}\u{300}-\u{590}\u{800}-\u{1FFF}\u{2C00}-\u{FB1C}\u{FDFE}-\u{FE6F}\u{FEFD}-\u{FFFF}]*[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]`).test(e);
  let o = async function (e, t = false) {
    try {
      let r = e.trim();
      if (!r) {
        return t;
      }
      let {
        franc: o
      } = await asyncRetryUtils.retryPromise(() => require.e("language-detection") /*id: 25841*/.then(require.bind(require, "language-detection-module") /*id: 433535*/));
      let s = o(r, {
        minLength: 20
      });
      if (s === "und") {
        return l(r.charAt(0));
      }
      return i.includes(s);
    } catch (e) {
      return t;
    }
  };
  let s = function (e, t = false) {
    let [n, i] = reactCoreLibraryReexport.useState("ltr");
    let a = async () => {
      i((await o(e, t)) ? "rtl" : "ltr");
    };
    reactCoreLibraryReexport.useEffect(() => {
      a();
    }, [e, t]);
    return n;
  };
  require.d(exports, {
    useTextDirection: function () {
      return s;
    }
  });
}