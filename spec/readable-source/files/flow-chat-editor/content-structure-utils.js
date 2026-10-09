// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LJ' to 'buildEditorContent'
// - Renamed export 'eN' to 'urlRegex'
// - Renamed export 'on' to 'normalizeContent'
// - Renamed export 'qs' to 'stringifyContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 429644
         */
module.exports = function (module, exports, require) {
  var inputToolElementUtils = require("input-tool-element-utils") /*id: 16749*/;
  var contentTypeConstants = require("content-type-constants") /*id: 937300*/;
  var platformTypeUtils = require("platform-type-utils") /*id: 870332*/;
  let l = /(?:https?:\/\/)?(?<![@\w\.])(?:[A-Za-z0-9-]+\.)+(?:com|cn|net|org|ai|info|tech|io|app|gov|top|site|cloud|dev)(?:\/[^\s?#]*)?(?:\?[^\s#]*)?(?:#[^\s]*)?/gi;
  let s = e => e.type === contentTypeConstants.contentTypes.Text;
  let c = e => e.type === contentTypeConstants.contentTypes.DocLink;
  let u = e => e.map((n, r) => {
    if (inputToolElementUtils.hasType(n)) {
      if (inputToolElementUtils.isParagraph(n)) {
        let {
          children: i
        } = n;
        return u(i).concat(r === e.length - 1 ? [] : [{
          type: contentTypeConstants.contentTypes.Text,
          text: "\n"
        }]);
      }
      if (platformTypeUtils.isDocLink(n)) {
        let {
          url: e,
          title: r,
          token: i,
          hasPermission: a
        } = n;
        return {
          type: contentTypeConstants.contentTypes.DocLink,
          url: e,
          title: r,
          token: i,
          hasPermission: a
        };
      }
    }
    return {
      type: contentTypeConstants.contentTypes.Text,
      text: "text" in n ? n.text : ""
    };
  }).flat();
  let d = e => {
    if (!e.length) {
      return [{
        type: "paragraph",
        children: [{
          text: ""
        }]
      }];
    }
    let n = [{
      type: "paragraph",
      children: []
    }];
    for (let a of e) {
      if (a.type === contentTypeConstants.contentTypes.Text && a.text === "\n") {
        n.push({
          type: "paragraph",
          children: []
        });
      } else if (c(a)) {
        let {
          url: e,
          title: o,
          token: l,
          hasPermission: s
        } = a;
        let c = n[n.length - 1].children?.[n[n.length - 1].children.length - 1];
        if (!c || inputToolElementUtils.hasType(c)) {
          n[n.length - 1].children.push({
            text: ""
          });
        }
        n[n.length - 1].children.push({
          type: "doc_link",
          url: e,
          title: o || e,
          token: l,
          hasPermission: s,
          children: [{
            text: ""
          }]
        });
      } else if (s(a)) {
        let {
          text: e
        } = a;
        n[n.length - 1].children.push({
          text: e
        });
      }
    }
    n.forEach(e => {
      let o = e.children?.[e.children?.length - 1];
      if (inputToolElementUtils.hasType(o)) {
        e.children.push({
          text: ""
        });
      }
    });
    return n;
  };
  let f = function (e, n = {}) {
    let {
      stringifyItem: r
    } = n;
    return e.map(e => c(e) ? (r == null ? undefined : r(e)) || e.title || e.url : s(e) ? e.text : undefined).join("");
  };
  require.d(exports, {
    buildEditorContent: function () {
      return d;
    },
    urlRegex: function () {
      return l;
    },
    normalizeContent: function () {
      return u;
    },
    stringifyContent: function () {
      return f;
    }
  });
}