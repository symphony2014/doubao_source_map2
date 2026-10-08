// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QJ' to 'conditionalHtmlEncode'
// - Renamed export 'Zl' to 'isClosingTag'
// - Renamed export 'dO' to 'serializeAstToHtml'
// - Renamed export 'f' to 'extractTagName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 966395
         */
module.exports = function (module, exports, require) {
  var htmlEntityCodec = require("html-entity-codec") /*id: 384132*/;
  var n = htmlEntityCodec;
  var astToHtmlSerializer = require("ast-to-html-serializer") /*id: 717279*/;
  let o = ["span", "u", "br"];
  let u = /<(?<tag>[a-zA-Z][a-zA-Z0-9\-_]*)(\s+([a-zA-Z\-_][a-zA-Z0-9\-_]*=(("[^"]*")|('[^']*'))))*\s*\/?>/;
  let a = /<\/(?<tag>[a-zA-Z][a-zA-Z0-9\-_]*)>/;
  let s = e => {
    for (let i of [u, a]) {
      let n = i.exec(e);
      if (n) {
        var t;
        var r;
        if ((r = n.groups) === null || r === undefined) {
          return undefined;
        } else if ((t = r.tag) === null || t === undefined) {
          return undefined;
        } else {
          return t.toLowerCase();
        }
      }
    }
  };
  let f = e => {
    var t;
    let r = s(e);
    if (r || typeof DOMParser == "undefined") {
      return r;
    }
    let i = new DOMParser().parseFromString(e, "text/html").body.firstElementChild;
    if (i == null) {
      return undefined;
    } else if ((t = i.tagName) === null || t === undefined) {
      return undefined;
    } else {
      return t.toLowerCase();
    }
  };
  let c = e => a.test(e);
  let p = function (e, t = []) {
    let r = f(e);
    if (t === true) {
      return e;
    }
    let i = [...o, ...(t || [])];
    if (r && !i.includes(r)) {
      return n.encode(e, {
        strict: false
      });
    } else {
      return e;
    }
  };
  let v = e => astToHtmlSerializer.serializeAst(e, {
    encodeEntities: false,
    decodeEntities: true
  });
  require.d(exports, {
    conditionalHtmlEncode: function () {
      return p;
    },
    isClosingTag: function () {
      return c;
    },
    serializeAstToHtml: function () {
      return v;
    },
    extractTagName: function () {
      return f;
    }
  });
}