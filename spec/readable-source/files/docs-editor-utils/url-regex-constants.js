// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A6' to 'blockIdConstantA'
// - Renamed export 'AW' to 'vcsProtocolRegex'
// - Renamed export 'Df' to 'strictUrlRegex'
// - Renamed export 'G9' to 'combinedUrlRegex'
// - Renamed export 'I6' to 'isSandBoxKey'
// - Renamed export 'Kp' to 'commonTldRegex'
// - Renamed export 'RI' to 'strictHttpRegex'
// - Renamed export 'Sf' to 'stringConstantOne'
// - Renamed export 'Tf' to 'protocolList'
// - Renamed export 'gR' to 'emailTldRegex'
// - Renamed export 'hC' to 'languageKey'
// - Renamed export 'mC' to 'docxRecordType'
// - Renamed export 'mY' to 'globalUrlRegex'
// - Renamed export 'nW' to 'snapshotIdKey'
// - Renamed export 'ti' to 'docsUrlRegex'
// - Renamed export 'v8' to 'blockIdConstantB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 631514
         */
module.exports = function (module, exports, require) {
  let o = "vscode|svn|git";
  let i = `https?|s?ftp|ftps|nfs|${o}`;
  let l = "docx_docxRecord";
  let c = "%[0-9a-f]{2}";
  let u = `([\\/#\\?]([\\-A-Z0-9@:_+.~#?&'/=;$,!\\*\\[\\]\\(\\){}^|<>]|(${c}))*([-A-Z0-9&@#/=~\\(\\)_|]|(${c}))?)?`;
  let a = `\\b${u}`;
  let s = RegExp(`((((${i})://)?(${/localhost(:[0-9]{2,5})?/.source}))|(((${i})://)(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source})))${a}`, "gi");
  let d = "(([]{1,256}\\.){1,50}|([\\-A-Z0-9_+~#@]{1,256}\\.){1,50})";
  let f = "[a-z\\-]{2,15}";
  let h = RegExp(`^s*((https?):\\/\\/${d}${f})(:[0-9]{2,5})?${a}s*$`, "i");
  let _ = RegExp(`(((${i}):\\/\\/)?(${d})(${f}))(:[0-9]{2,5})?${a}`, "gi");
  let p = RegExp(`(((${i}):\\/\\/${d}${f})|(${d}(com|cn|tk|de|net|org|uk|info|nl|ru|hk)))(:[0-9]{2,5})?${a}`, "gi");
  let g = "([-A-Z0-9_+#@]{1,256}(?:[-A-Z0-9_+#@]{0,255}))";
  let E = RegExp(`(${i}):\\/\\/${g}(:[0-9]{2,5})?${a}`, "gi");
  let m = RegExp(`((${i}):\\/\\/${g}(:[0-9]{2,5})?${u})`, "gi");
  let b = RegExp(`(${o}):\\/\\/(.+)`, "gi");
  let v = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  let T = RegExp(`^(?!data:)((mailto:${v}${f})|(${v}(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))\\b`, "gi");
  let C = RegExp(`${T.source}|${_.source}|${s.source}|${m.source}|${E.source}`, "gi");
  let k = RegExp(`${T.source}|${p.source}|${s.source}|${m.source}|${E.source}`, "gi");
  let I = RegExp(`${T.source}$|^${p.source}$|^${s.source}$|^${m.source}$|^${E.source}$`, "i");
  let R = "language";
  let y = "isSandBox";
  let O = "blockSnapshotId";
  let S = "1";
  let A = "blk_60d44afb3a44401ca5edeb5f";
  let L = "blk_637b27183a810001a5289317";
  let N = /^https:\/\/([^\/?#:]+)\/(docs|docx|mindnotes|slides|sheets|file|wiki|base)\/[a-zA-Z0-9_]{25,30}([?](.*))?$/;
  require.d(exports, {
    blockIdConstantA: function () {
      return L;
    },
    vcsProtocolRegex: function () {
      return b;
    },
    strictUrlRegex: function () {
      return I;
    },
    combinedUrlRegex: function () {
      return k;
    },
    isSandBoxKey: function () {
      return y;
    },
    commonTldRegex: function () {
      return p;
    },
    strictHttpRegex: function () {
      return h;
    },
    stringConstantOne: function () {
      return S;
    },
    protocolList: function () {
      return i;
    },
    emailTldRegex: function () {
      return T;
    },
    languageKey: function () {
      return R;
    },
    docxRecordType: function () {
      return l;
    },
    globalUrlRegex: function () {
      return C;
    },
    snapshotIdKey: function () {
      return O;
    },
    docsUrlRegex: function () {
      return N;
    },
    blockIdConstantB: function () {
      return A;
    }
  });
}