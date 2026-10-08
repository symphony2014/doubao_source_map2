// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'calculateCodeBlockPosition'
// - Renamed export 'a' to 'codeBlockPositionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 871792
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = reactCoreLibraryReexport.createContext({
    position: 0
  });
  let a = (e, t) => {
    let n = 0;
    for (let r = 0; r < t; r++) {
      if (e.slice(r, r + 3) === "```") {
        n++;
        r += 3;
      }
    }
    return n;
  };
  let s = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(0);
    let {
      position: s
    } = reactCoreLibraryReexport.useContext(o);
    if (s > 0) {
      return s;
    }
    if (n.current < 1) {
      try {
        var u;
        var v;
        var h;
        if (messageContentTypeAndStatusChecker.zL_(t) && (t == null ? undefined : t.content_blocks_v2?.length)) {
          let r = (t == null ? undefined : (u = t.content_blocks_v2) === null || u === undefined ? undefined : u.filter(e => {
            var n;
            return e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT && (((n = e.content) === null || n === undefined ? undefined : n.text_block?.text) ?? "").includes("```");
          })) ?? [];
          if (r.length === 0) {
            return 0;
          }
          let l = 0;
          for (let t of r) {
            let n = ((v = t.content) === null || v === undefined ? undefined : v.text_block?.text) ?? "";
            let r = n.indexOf(e);
            if (r > -1) {
              let e = a(n, r);
              l += Math.floor(e / 2);
              break;
            }
            {
              let e = a(n, n.length);
              l += Math.floor(e / 2);
            }
          }
          n.current = l + 1;
        } else if (messageContentTypeAndStatusChecker.zL_(t) && (t == null ? undefined : t.content_blocks?.length)) {
          let r = (t == null ? undefined : (h = t.content_blocks) === null || h === undefined ? undefined : h.filter(e => {
            return (e.parent_id === "0" || !e.parent_id) && (e.content_obj?.text ?? "").includes("```");
          })) ?? [];
          if (r.length === 0) {
            return 0;
          }
          let i = 0;
          for (let t of r) {
            let n = t.content_obj?.text ?? "";
            let r = n.indexOf(e);
            if (r > -1) {
              let e = a(n, r);
              i += Math.floor(e / 2);
              break;
            }
            {
              let e = a(n, n.length);
              i += Math.floor(e / 2);
            }
          }
          n.current = i + 1;
        } else {
          let r = (t == null ? undefined : t.content_obj?.text) ?? "";
          if (!r || typeof r != "string") {
            return 0;
          }
          let i = r.indexOf(e);
          if (i > -1) {
            let e = a(r, i);
            n.current = Math.floor(e / 2) + 1;
          }
        }
      } catch (e) {
        return 0;
      }
    }
    return n.current;
  };
  require.d(exports, {
    calculateCodeBlockPosition: function () {
      return s;
    },
    codeBlockPositionContext: function () {
      return o;
    }
  });
}