// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'pickFiles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 364090
         */
module.exports = function (module, exports, require) {
  let n;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  function r(e) {
    return new Promise((t, i) => {
      (function (e, t) {
        if (n) {
          n.remove();
          n = undefined;
        }
        let i = document.createElement("input");
        i.setAttribute("type", "file");
        i.setAttribute("style", "display: block; position: fixed; width: 1px; height: 1px; left: -1px; top: -1px; opacity: 0; overflow: hidden;");
        if (t == null ? undefined : t.allowMultiple) {
          i.setAttribute("multiple", "multiple");
        }
        if (t == null ? undefined : t.isDirectory) {
          i.setAttribute("webkitdirectory", "webkitdirectory");
        }
        if ((t == null ? undefined : t.fileTypes) && t.fileTypes.length) {
          let {
            fileTypes: e
          } = t;
          i.setAttribute("accept", isStringTypeCheck.isString(e) ? e : e.map(e => {
            let t = e.replace(/\s/g, "").toLowerCase();
            if (t.match(/^[^.][^/]+$/)) {
              t = `.${t}`;
            }
            return t;
          }).join(","));
        }
        let r = t => {
          e(t);
          i.remove();
          n = undefined;
        };
        i.addEventListener("change", r);
        i.addEventListener("cancel", r);
        document.body.appendChild(i);
        n = i;
        i.focus();
        i.click();
      })(e => {
        let n = e.target;
        let a = n == null ? undefined : n.files;
        if (a) {
          t({
            event: e,
            files: a
          });
        } else {
          i(Error("not choose files"));
        }
      }, e);
    });
  }
  require.d(exports, {
    pickFiles: function () {
      return r;
    }
  });
}