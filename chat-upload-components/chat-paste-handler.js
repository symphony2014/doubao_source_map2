// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'handlePasteUpload'
// - Renamed export 'u' to 'useChatUploadHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 226734
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  (i = {}).Avoid = "avoid";
  let u = i;
  let p = e => objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.input_paste_url_behavior") === u.Avoid;
  let f = () => ({
    pasteUrlIntoTextarea: chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t
      } = e;
      return p(t);
    })
  });
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let b = () => typeof window != "undefined" && location.pathname.includes("/doc-playground");
  var inputToolMenuListener = require("input-tool-menu-listener") /*id: 719698*/;
  var chatFileUploadHook = require("chat-file-upload-hook") /*id: 541666*/;
  var useLauncherSetting = require("use-launcher-setting") /*id: 310833*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  let C = e => {
    var n;
    var i;
    var o;
    let {
      isLoggedIn: a
    } = e;
    let [r, s] = reactCoreLibraryReexport.useState(false);
    let c = (o = (i = useLauncherSetting.useLauncherSetting()) === null || i === undefined ? undefined : (n = i.data) === null || n === undefined ? undefined : n.ai_reader?.enable_ult) !== null && o !== undefined && o;
    useRequestHook.useRequest(async () => {
      if (a) {
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.GetUnreadNoticeInfo();
        s(Number((t == null ? undefined : t.ultra_long_text_notice_time) ?? -1) === 0);
      }
    }, {
      cacheKey: "useUltraLongTextGuide"
    });
    return {
      ultraLongTextGuideCanActive: r && c,
      hideUltraLongTextGuide: reactCoreLibraryReexport.useCallback(() => {
        s(false);
        apiServicesCollection.SamanthaApiService.MarkUltraLongTextRead();
      }, [])
    };
  };
  let j = e => {
    let {
      enableUpload: t,
      onAfterSendMessage: n
    } = e;
    let {
      uploadFiles: i
    } = chatFileUploadHook.useFileUploadHook({
      enableUpload: t,
      onAfterSendMessage: n
    });
    let {
      chatId: c,
      chatType: d,
      isImmersiveMode: u
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType,
        isImmersiveMode: e.currentChatViewConfig?.isImmersiveMode
      };
    }, deepEqualityUtil.deepEqual);
    let p = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[c ?? ""]);
    let m = chatConversationSelectors.selectConvLink(c || "", d);
    let {
      pasteUrlIntoTextarea: w
    } = f();
    let y = chatFileUploadHook.useFileExtensionCheck();
    let k = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: c ?? "",
      skillType: p
    });
    let {
      addLink: C
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: c ?? "",
      skillType: p
    });
    let j = superTaskStore.superTaskStore(e => e.isSuperTaskEnableByConvId(c) && !e.taskAbConfig.enable_sidebar_complex_task && !p && !u && m);
    let S = useLatestCallbackHook_1.useLatestCallback((e, t) => {
      let {
        isValidLink: n,
        event: l,
        trimText: o,
        files: r
      } = t;
      let s = b();
      if ((s || !j) && m && !w && n && (s || k.length === 0)) {
        l.preventDefault();
        C({
          url: o
        });
      }
      let c = [...r].filter(e => {
        var t;
        return (t = y == null ? undefined : y(e)) === null || t === undefined || t;
      });
      if (!isEmptyUtil.isEmpty(c) && !o) {
        l.preventDefault();
        i([...c], {
          from: "paste",
          uploadWay: "paste"
        });
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        inputToolMenuListener.menuOptionListener.on("onPaste", S);
        return () => {
          inputToolMenuListener.menuOptionListener.off("onPaste", S);
        };
      }
    }, [t]);
    return {
      uploadFiles: i
    };
  };
  let S = e => {
    let {
      enableUpload: t,
      onAfterSendMessage: n
    } = e;
    let {
      uploadFiles: i
    } = chatFileUploadHook.useFileUploadHook({
      enableUpload: t,
      onAfterSendMessage: n
    });
    let {
      ultraLongTextGuideCanActive: l,
      hideUltraLongTextGuide: a
    } = C({
      isLoggedIn: userInfoStatusSelectors.selectUserInfoSuccess_1()
    });
    let {
      chatId: r,
      chatType: d
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let u = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[r ?? ""]);
    return {
      uploadFiles: i,
      ultraLongTextGuideCanActive: l,
      hideUltraLongTextGuide: a,
      enableCodeSkillRelate: chatInputToolSupport.isCodeSkillEnabled({
        chatId: r,
        chatType: d,
        skillType: u,
        exemptFromCodingReverse: true
      })
    };
  };
  require.d(exports, {
    handlePasteUpload: function () {
      return j;
    },
    useChatUploadHook: function () {
      return S;
    }
  });
}