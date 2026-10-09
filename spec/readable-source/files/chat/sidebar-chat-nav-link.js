// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'ChatGuidanceNavLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 581834
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var runtimeNavLinkWrapper = require("runtime-nav-link-wrapper") /*id: 649486*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = () => {
    let {
      run: e
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      var e;
      var t;
      if ((e = (t = chatStoreManager.getStoreState("chatGuidanceStore")).setActiveSkillGuidanceIdentifier) !== null && e !== undefined) {
        e.call(t);
      }
      chatStoreManager.getStore("chatViewCoreStore").setState({
        currentLocalConversationId: ""
      });
    }, {
      wait: 500,
      trailing: false,
      leading: true
    });
    return e;
  };
  let h = e => {
    let {
      title: t,
      mainConversationId: n = "main",
      v2: r
    } = e;
    let l = d();
    let s = `/chat/${n}`;
    let h = () => {
      l();
    };
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      isOverflow: false,
      v2: r,
      isOverflowPopover: false,
      text: t,
      NavLink: runtimeNavLinkWrapper.RuntimeNavLink,
      url: s,
      renderIcon: () => reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl("https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo_light_1x.png", null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5-%doa1F6RnpX$mhzZ*1SW$$-WmpNMHBx$ERKS2NH$nBNWFJpTWxJeFlrZFdla3d6$*5C-$IxWnBX$mhKZ*xsWFRqQmhWemwx$EZkN*NHTXp$WFpp$jBad1lta3hhb%l5TlRK-$dFcDZX$mhT-0dJe%5I$mtTRTQw$1ZoS2Jt%ll%$DA9"
        }),
        className: o("block size-22 flex-shrink-0", "border-[0.5px] border-dbx-line-10 rounded-full")
      }),
      onClick: () => {
        h();
      }
    });
  };
  require.d(exports, {
    ChatGuidanceNavLink: function () {
      return h;
    }
  });
}