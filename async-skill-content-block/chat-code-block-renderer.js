// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'codeBlockRenderer'
// - Renamed export 'w' to 'chatCodeBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 796161
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatContentBlockFormatter = require("chat-content-block-formatter") /*id: 778320*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var codeBlockPositionContext = require("code-block-position-context") /*id: 871792*/;
  var chatCodeInterpreterUi = require("chat-code-interpreter-ui") /*id: 741563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      message: t,
      blockContent: n,
      isLatestBlock: p,
      metaInfos: m,
      codeBlockIndex: v,
      inView: f = false,
      isFromShare: h = false
    } = e;
    let {
      code: g = "",
      content: _
    } = n ?? {};
    let b = _ || g;
    let k = reactCoreLibraryReexport.useMemo(() => chatContentBlockFormatter.formatCodeBlock(n), [b, n == null ? undefined : n.std_out_list, n == null ? undefined : n.type]);
    let y = !p || chatMessageStatusCheck.isMessageFinished(t);
    let x = !!p && messageContentTypeAndStatusChecker.vlk(t);
    let w = h || messageContentTypeAndStatusChecker.F3w(t) ? asyncSkillContentBlock_5.AsyncSkillContentBlock : chatMessageContentRenderer_1.ChatMessageContentRenderer;
    let S = chatCodeInterpreterUi.useCodeInterpreterUI(b);
    if (k) {
      return reactJsxRuntimeCoreReexport.jsx(codeBlockPositionContext.codeBlockPositionContext.Provider, {
        value: {
          position: v + 1
        },
        children: reactJsxRuntimeCoreReexport.jsx(w, {
          inView: f,
          messageBlockText: k,
          messageBlockMeta: m,
          messageBlockTextFinish: y,
          messageBlockTextBroken: x,
          message: t,
          customRenderOptions: {
            getCodebarConfig: S
          }
        })
      });
    } else {
      return null;
    }
  };
  let m = e => {
    var t;
    var i;
    var l;
    let {
      message: o,
      contentBlock: a,
      inView: s = false
    } = e;
    let c = ((t = o.content_blocks) === null || t === undefined ? undefined : t.findIndex(e => e.id === a.id)) === (o.content_blocks?.length || 0) - 1;
    let d = ((l = o.content_blocks) === null || l === undefined ? undefined : (i = l.filter(e => e.block_type === a.block_type)) === null || i === undefined ? undefined : i.findIndex(e => e.id === a.id)) ?? 0;
    return reactJsxRuntimeCoreReexport.jsx(p, {
      message: o,
      inView: s,
      blockContent: a.content_obj,
      metaInfos: a.meta_infos || [],
      isLatestBlock: c,
      codeBlockIndex: d
    });
  };
  require.d(exports, {
    codeBlockRenderer: function () {
      return p;
    },
    chatCodeBlock: function () {
      return m;
    }
  });
}