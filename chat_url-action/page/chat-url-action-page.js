// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'chatUrlActionPlugin'
// - Resolved require(742349) to 'chat-url-action-plugin'
// - Renamed variable 's' to 'chatPluginLoaderComponent'
// - Resolved require(907735) to 'chat-plugin-loader-component'
// - Renamed variable 'a' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Resolved require.e(82789) to 'vip-feature-url-parse-plugin'
// - Resolved require.bind(836142) to 'vip-feature-url-parse-handler'
// - Renamed variable 'c' to 'creditPanelInitActions'
// - Resolved require(437103) to 'credit-panel-init-actions'
// - Renamed variable 'u' to 'minuteMeetingPlugin'
// - Resolved require(901750) to 'minute-meeting-plugin'
// - Renamed variable 'p' to 'aiSpaceActionHandlerRegistry'
// - Resolved require(748480) to 'ai-space-action-handler-registry'
// - Resolved require.e(91454) to 'super-task-duplicate-url-parse-plugin'
// - Resolved require.bind(407034) to 'super-task-duplicate-url-action-handler'
// - Resolved require.e(4258) to 'ai-space-coding-url-parse-plugin'
// - Resolved require.bind(55234) to 'chat-share-conversation-handler'
// - Resolved require.e(17547) to 'image-canvas-openurl-url-parse-plugin'
// - Resolved require.bind(578213) to 'image-canvas-openurl-action'
// - Resolved require.e(52823) to 'ai-coding-open-canvas-repo-plugin'
// - Resolved require.bind(248261) to 'code-chat-input-activator'
// - Renamed variable 'y' to 'pptAutoCanvasViewActionHandler'
// - Resolved require(836436) to 'ppt-auto-canvas-view-action-handler'
// - Resolved require.e(48524) to 'auto-switch-ppt-skill-url-parse-plugin'
// - Resolved require.bind(958129) to 'switch-ai-ppt-skill-url-action'
// - Renamed variable 'b' to 'chatViewInitHook'
// - Resolved require(481960) to 'chat-view-init-hook'
// - Renamed variable '_' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'x' to 'taskStatusConstants'
// - Resolved require(100834) to 'task-status-constants'
// - Renamed variable 'w' to 'chatMessageSender_2'
// - Resolved require(656716) to 'chat-message-sender_2'
// - Renamed variable 'C' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'O' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Renamed variable 'E' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'S' to 'runtimeLinkRenderer'
// - Resolved require(870490) to 'runtime-link-renderer'
// - Renamed variable 'j' to 'dbxSonnerToasterWrapper'
// - Resolved require(682910) to 'dbx-sonner-toaster-wrapper'
// - Renamed variable 'T' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'j4' to 'setupPanelListener' (module 437103)
// - Updated imported property 'Ob' to 'initCreditBenefits' (module 437103)
// - Updated imported property 'x' to 'CreditPanelActions' (module 437103)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property '_' to 'useChatViewInit' (module 481960)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'C' to 'ChatUrlActionPlugin' (module 742349)
// - Updated imported property 'd' to 'aiSpaceActionHandlers' (module 748480)
// - Updated imported property 'i' to 'minuteMeetingPlugin' (module 901750)
// - Updated imported property 'd' to 'pptAutoCanvasViewAction' (module 836436)
// - Updated imported property 'O' to 'sendMessage' (module 656716)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'I' to 'TaskStatus' (module 100834)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// - Updated imported property 'r' to 'RuntimeLink' (module 870490)
// - Updated imported property 'o' to 'ChatPluginLoader' (module 907735)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.bea024bf.js
         * chunkId: 83145
         * moduleId: 805717
         */
module.exports = function (module, exports, require) {
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatUrlActionPlugin = require("chat-url-action-plugin") /*id: 742349*/;
  var chatPluginLoaderComponent = require("chat-plugin-loader-component") /*id: 907735*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let l = {
    matcher: e => [aiActionConstants.aiActionConstants.Vip_Feature].includes(e),
    handler: e => {
      require.e("vip-feature-url-parse-plugin") /*id: 82789*/.then(require.bind(require, "vip-feature-url-parse-handler") /*id: 836142*/).then(t => {
        t.handler(e);
      });
    }
  };
  var creditPanelInitActions = require("credit-panel-init-actions") /*id: 437103*/;
  let d = {
    matcher: e => aiActionConstants.aiActionConstants.Credit_AutoOpenCreditPanel === e,
    handler: e => {
      e.navigate("/chat/");
      creditPanelInitActions.setupPanelListener();
      setTimeout(() => {
        creditPanelInitActions.initCreditBenefits();
        creditPanelInitActions.CreditPanelActions.openCreditPanel({
          from: "menu"
        });
      }, 1000);
    }
  };
  var minuteMeetingPlugin = require("minute-meeting-plugin") /*id: 901750*/;
  var aiSpaceActionHandlerRegistry = require("ai-space-action-handler-registry") /*id: 748480*/;
  let h = {
    matcher: e => aiActionConstants.aiActionConstants.SuperTask_DuplicateStyle === e,
    handler: e => require.e("super-task-duplicate-url-parse-plugin") /*id: 91454*/.then(require.bind(require, "super-task-duplicate-url-action-handler") /*id: 407034*/).then(t => {
      t.default(e);
    })
  };
  let f = {
    matcher: e => [aiActionConstants.aiActionConstants.Share_ContinueChat_CreateConversation].includes(e),
    handler: e => {
      require.e("ai-space-coding-url-parse-plugin") /*id: 4258*/.then(require.bind(require, "chat-share-conversation-handler") /*id: 55234*/).then(t => {
        t.default(e);
      });
    }
  };
  let m = {
    matcher: e => aiActionConstants.aiActionConstants.PC_ImageCanvasOpen === e,
    handler: e => require.e("image-canvas-openurl-url-parse-plugin") /*id: 17547*/.then(require.bind(require, "image-canvas-openurl-action") /*id: 578213*/).then(t => {
      t.default(e);
    })
  };
  let g = {
    matcher: e => e === aiActionConstants.aiActionConstants.ChatInput_Active_Code,
    handler: e => {
      require.e("ai-coding-open-canvas-repo-plugin") /*id: 52823*/.then(require.bind(require, "code-chat-input-activator") /*id: 248261*/).then(t => {
        t.default(e);
      });
    }
  };
  var pptAutoCanvasViewActionHandler = require("ppt-auto-canvas-view-action-handler") /*id: 836436*/;
  let v = {
    matcher: e => aiActionConstants.aiActionConstants.PPT_AutoSwitchPPTSkill === e,
    handler: e => require.e("auto-switch-ppt-skill-url-parse-plugin") /*id: 48524*/.then(require.bind(require, "switch-ai-ppt-skill-url-action") /*id: 958129*/).then(t => {
      t.default(e);
    })
  };
  var chatViewInitHook = require("chat-view-init-hook") /*id: 481960*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var taskStatusConstants = require("task-status-constants") /*id: 100834*/;
  var chatMessageSender_2 = require("chat-message-sender_2") /*id: 656716*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var runtimeLinkRenderer = require("runtime-link-renderer") /*id: 870490*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  let P = [];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function N(e) {
    let {
      children: t
    } = e;
    let n = useNavigateRuntimeResolver.useNavigateResolver();
    let r = reactCoreLibraryReexport.useRef("");
    let {
      sendMessageHelper: a
    } = chatViewInitHook.useChatViewInit({
      chatId: r.current,
      chatType: chatConversationTypes.ConversationTypes.NewThread,
      navigate: n
    });
    let {
      resolveLocalConversationId: c
    } = a();
    r.current ||= c;
    chatUrlActionPlugin.ChatUrlActionPlugin({
      plugins: [...aiSpaceActionHandlerRegistry.aiSpaceActionHandlers, m, f, ...P, minuteMeetingPlugin.minuteMeetingPlugin, d, h, v, pptAutoCanvasViewActionHandler.pptAutoCanvasViewAction, l, g],
      resolveLocalConversationId: c,
      sendMessage: (e, t) => chatMessageSender_2.sendMessage(e.map(e => ({
        ...e,
        localConversationId: c,
        conversationId: undefined
      })), t),
      onReadyToParse: async () => new Promise(e => chatStoreManager.getStore("launcherRawSettingStore").subscribe(e => e.launchStatus, t => t === taskStatusConstants.TaskStatus.Success && e(), {
        fireImmediately: true
      })).then(() => promiseAsyncUtilities.createDelayedPromise(50))
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxSonnerToasterWrapper.DbxToaster, {}), t, reactJsxRuntimeCoreReexport.jsx(runtimeLinkRenderer.RuntimeLink, {
        to: "/chat/local_11",
        prefetch: "render"
      }), reactJsxRuntimeCoreReexport.jsx(chatPluginLoaderComponent.ChatPluginLoader, {})]
    });
  }
  function k() {
    let {
      pageInteractive: e
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(N, {});
    } else {
      return null;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return k;
    }
  });
}