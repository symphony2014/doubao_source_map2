// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useMindMapEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93508.9407bc60.js
         * chunkId: 93508
         * moduleId: 936926
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  let d = e => {
    let {
      trackEvent: n,
      messageLink: d,
      message: s,
      conversationId: u,
      reportParams: h = {},
      codeBlockPosition: v,
      loading: m
    } = e;
    let g = reactCoreLibraryReexport.useRef(Date.now());
    let p = reactCoreLibraryReexport.useRef(m);
    let x = chatMessageStoreFactory.createMessageStore(e => {
      if (!s) {
        if (!d) {
          return {};
        }
        s = conversationMessageUtils_1.getMessageFromLink(e, u || "", d);
      }
      return {
        message_id: s == null ? undefined : s.message_id,
        conversation_id: u,
        skill_id: String(s == null ? undefined : s.skill?.skill_type) || "",
        skill_name: (s == null ? undefined : s.skill?.skill_type) ? skillTypeMappings.getSkillName(s == null ? undefined : s.skill?.skill_type) : ""
      };
    }, deepEqualUtil_1.deepEqual) ?? {};
    let f = e => {
      let {
        isFullscreen: t
      } = e;
      return {
        ...x,
        whether_full_screen: t ? "1" : "0",
        position: v
      };
    };
    let _ = e => t => n("mind_map_click", {
      ...f({
        isFullscreen: t
      }),
      ...h,
      button_name: e
    });
    let w = (e, t) => {
      n("mind_map_show", {
        ...f({
          isFullscreen: e
        }),
        ...h,
        CR_loading_time: p.current ? Date.now() - g.current : undefined,
        if_success: typeof t == "boolean" ? t ? "1" : "0" : undefined
      });
    };
    let b = async e => {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      let l = t == null ? undefined : t.getCanvasTeaParams();
      n("copy", {
        ...f({
          isFullscreen: e
        }),
        click_from: "read_graph",
        ...l
      });
    };
    let y = e => {
      n("download", {
        ...f({
          isFullscreen: e
        }),
        click_from: "read_graph"
      });
    };
    return reactCoreLibraryReexport.useMemo(() => ({
      onDownload: e => {
        _("download")(e);
        y(e);
      },
      onCopyCode: e => {
        _("copy_code")(e);
        b(e);
      },
      onCopyImg: e => {
        _("copy_mind_map_image")(e);
        b(e);
      },
      onCopyHtml: e => {
        _("copy_mind_map_text")(e);
        b(e);
      },
      onZoomIn: _("zoom_in"),
      onZoomOut: _("zoom_out"),
      onZoomFit: _("zoom_fit"),
      onEnterFullscreen: () => {
        _("fullscreen")();
        w(true, true);
      },
      onMindMapShow: w,
      onTabChange: e => {
        let {
          buttonName: t
        } = e;
        return _(t)();
      }
    }), []);
  };
  require.d(exports, {
    useMindMapEvents: function () {
      return d;
    }
  });
}