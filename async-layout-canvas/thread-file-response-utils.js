// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CX' to 'createFileResponse'
// - Renamed export '_L' to 'handleFileRetrieval'
// - Renamed export 'sF' to 'resolveEntryPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 191293
         */
module.exports = function (module, exports, require) {
  var uidPathUtils = require("uid-path-utils") /*id: 368151*/;
  let l = {
    html: "text/html",
    htm: "text/html",
    xml: "application/xml",
    xhtml: "application/xhtml+xml",
    css: "text/css",
    js: "application/javascript",
    mjs: "application/javascript",
    json: "application/json",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    avif: "image/avif",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    ttf: "font/ttf",
    otf: "font/otf",
    woff: "font/woff",
    woff2: "font/woff2",
    pdf: "application/pdf",
    manifest: "application/manifest+json"
  };
  let r = (e, t) => {
    if (!(e == null ? undefined : e.length) || e.filter(e => !!(e == null ? undefined : e.path)).length <= 1) {
      return;
    }
    let r = t ? `${t}/` : "";
    let o = e.find(e => {
      var t;
      return ((e == null ? undefined : e.is_entry) === true || (e == null ? undefined : e.isEntry)) && ((t = e.path) === null || t === undefined ? undefined : t.endsWith(".html"));
    })?.path;
    if (o) {
      return `${r}${o}`;
    }
    if (e.some(e => (e == null ? undefined : e.path) === "index.html")) {
      return `${r}index.html`;
    }
    let a = e.find(e => {
      var t;
      if (e == null) {
        return undefined;
      } else if ((t = e.path) === null || t === undefined) {
        return undefined;
      } else {
        return t.endsWith("index.html");
      }
    })?.path;
    if (a) {
      return `${r}${a}`;
    }
    let s = e.find(e => {
      var t;
      if (e == null) {
        return undefined;
      } else if ((t = e.path) === null || t === undefined) {
        return undefined;
      } else {
        return t.endsWith(".html");
      }
    })?.path;
    if (s) {
      return `${r}${s}`;
    }
  };
  let o = (e, t, n) => {
    if (t) {
      if (e) {
        let {
          uid: l,
          path: r
        } = uidPathUtils.parseUidPath(e);
        if (l !== t) {
          return;
        }
        let o = decodeURIComponent(r);
        let a = n == null ? undefined : n.find(e => (e == null ? undefined : e.path) === o);
        return [s(e, a == null ? undefined : a.content)];
      }
      {
        let e = [".css", ".js", ".html"];
        return (n == null ? undefined : n.filter(t => !!t.path && e.some(e => {
          var n;
          if (t == null) {
            return undefined;
          } else if ((n = t.path) === null || n === undefined) {
            return undefined;
          } else {
            return n.endsWith(e);
          }
        })).map(e => s(`${t}/${e.path}`, e == null ? undefined : e.content))) || [];
      }
    }
  };
  let a = {
    body: null,
    init: {
      status: 404,
      statusText: "Not Found"
    },
    path: ""
  };
  function s(e, t) {
    if (!t) {
      return {
        ...a,
        path: e
      };
    }
    if (e.endsWith(".html") || e.endsWith(".css") || e.endsWith(".js")) {
      var n;
      return {
        body: t,
        init: {
          status: 200,
          statusText: "OK",
          headers: {
            "Content-Type": l[(n = e.split(".").pop()) === null || n === undefined ? undefined : n.toLowerCase()] || "text/plain",
            "X-SW-Hijacked": "true"
          }
        },
        path: e
      };
    }
    return {
      body: null,
      init: {
        status: 302,
        statusText: "Found",
        headers: {
          Location: t
        }
      },
      path: e
    };
  }
  require.d(exports, {
    createFileResponse: function () {
      return s;
    },
    handleFileRetrieval: function () {
      return o;
    },
    resolveEntryPath: function () {
      return r;
    }
  });
}