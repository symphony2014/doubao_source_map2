// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C_' to 'AvatarPopoverMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 655141
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var downloadAppSidebarComponents = require("download-app-sidebar-components") /*id: 789871*/;
  var samanthaDownloadPopover = require("samantha-download-popover") /*id: 782906*/;
  var chatNotificationConfig = require("chat-notification-config") /*id: 670807*/;
  var chatUiConfigRenderer = require("chat-ui-config-renderer") /*id: 757047*/;
  var creditPanelMenuItem = require("credit-panel-menu-item") /*id: 269850*/;
  var logoutConfirmationFlow = require("logout-confirmation-flow") /*id: 46038*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var rtlDocumentUploadIcon = require("rtl-document-upload-icon") /*id: 950277*/;
  var iconSunOutline = require("icon-sun-outline") /*id: 700480*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var C = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 18 18",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#545454",
      d: "M4.666 11.356c.11-2.392 1.194-3.824 1.616-4.295-2.068 1.311-3.44 3.607-4.032 5.296v.713h.001c0 1.956 1.729 3.542 3.86 3.542.493 0 .963-.086 1.396-.24q.335-.116.659-.241a8.2 8.2 0 0 0 1.423-1.907c-3.094 1.55-5.057.046-4.923-2.868"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#C9C9C9",
      d: "M15.613 7.868c-.77-.575-2.606-1.532-4.691-1.785.187 2.417.058 5.588-1.333 8.142a8.2 8.2 0 0 1-1.423 1.907c2.387-.924 4.278-2.204 5.452-3.326 1.788-1.711 2.127-3.302 2.132-4.246a1.8 1.8 0 0 0-.137-.692"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#ACACAC",
      d: "M10.37 2.503c-.855-.745-1.938-1.19-3.116-1.19s-2.224.43-3.072 1.152C3.069 3.41 2.33 4.855 2.25 6.493v5.865c.591-1.69 1.964-3.985 4.032-5.297.316-.2.647-.379.995-.528 1.195-.51 2.46-.594 3.645-.45a23.3 23.3 0 0 0-.552-3.58"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#545454",
      d: "M12.273 4.47c-.26-.264-.496-.503-.685-.697l-.372-.397-.846-.879c.096.392.412 1.776.552 3.58 2.085.254 3.922 1.21 4.69 1.786a222 222 0 0 1-3.339-3.393"
    })]
  }), {}));
  var k = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M12.015 0c-.372 0-.687.261-.724.606l-.01.09-.011.097c-.25 2.483-.389 4.969-.263 7.46.063 1.243.492 13.458.55 15.17a.455.455 0 0 0 .458.439.454.454 0 0 0 .453-.44c.066-1.927.494-13.926.557-15.169.126-2.492-.012-4.977-.264-7.46L12.74.606C12.702.261 12.387 0 12.015 0M6.628 12.471c-.046-.355-.09-.702-.179-1.041a.604.604 0 0 0-.593-.435.6.6 0 0 0-.592.435c-.09.34-.134.688-.18 1.045q-.015.132-.035.266c-.099.648-.03 1.291.04 1.934q.028.243.05.487c.053.604.182 2.002.258 2.604l.042.321a.42.42 0 0 0 .837 0l.021-.16.021-.161c.077-.601.206-2 .258-2.604q.023-.24.05-.481c.07-.643.139-1.29.04-1.94h-.003zM15.946 5.105q.02.109.032.217h.006c.26 2.527.31 3.2.24 5.604-.016.573-.27 7.252-.457 10.107a.436.436 0 0 1-.437.406l-.012-.001h-.004l-.01-.002-.002.001-.023.002a.437.437 0 0 1-.436-.406c-.19-2.856-.441-9.534-.458-10.107-.069-2.405-.02-3.078.24-5.604q.013-.11.033-.217l.015-.094c.045-.28.303-.487.608-.487h.01l.01.001h.011l.01-.001c.305 0 .562.207.608.487zM18.947 12.471c-.045-.355-.09-.702-.179-1.041a.604.604 0 0 0-.592-.435.6.6 0 0 0-.593.435c-.089.34-.133.688-.18 1.045l-.034.266c-.1.648-.03 1.291.04 1.934q.027.243.05.487c.052.604.181 2.002.258 2.604l.02.16.022.161a.42.42 0 0 0 .837 0l.02-.16.022-.161c.076-.601.205-2 .258-2.604q.022-.24.05-.481c.069-.643.138-1.29.04-1.94h-.003zM9.376 5.105q.02.109.032.217h.006c.26 2.527.31 3.2.24 5.604-.016.573-.27 7.252-.457 10.107a.436.436 0 0 1-.437.406l-.012-.001-.013-.002-.004.001-.022.002a.436.436 0 0 1-.436-.406c-.19-2.856-.441-9.534-.458-10.107-.069-2.405-.02-3.078.24-5.604q.013-.11.033-.217l.015-.094c.045-.28.303-.487.608-.487h.01l.01.001h.011l.01-.001c.305 0 .562.207.608.487z"
    })
  }), {}));
  var exitToAppIcon_1 = require("exit-to-app-icon_1") /*id: 343842*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  require("dbx-dropdown-menu-components") /*id: 491728*/;
  var chatHeaderSettingsButton = require("chat-header-settings-button") /*id: 592723*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var R = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "m11.453 11.91 3.036-4.305 1.2-1.61a3.79 3.79 0 0 0 .425-3.847c-.082-.183.085-.398.275-.333q.36.123.71.273a3.8 3.8 0 0 1 1.734 5.494l-2.5 4.04a.23.23 0 0 0 .029.277l.14.15c.61.647.724 1.619.279 2.39a3.226 3.226 0 0 1-4.407 1.18l-.12-.069a2.524 2.524 0 0 1-.8-3.64m4.605 1.51a.49.49 0 0 0-.599.083l-.747.773a.491.491 0 0 0 .706.683l.748-.773a.49.49 0 0 0-.108-.767",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M7.089 3.558c1.794-1.752 4.29-2.467 6.763-2.272q.043.004.082.024c.96.521 1.51 1.583 1.415 2.649-.016.178-.242.235-.388.13a1.7 1.7 0 0 0-.57-.26c-2.068-.505-4.374-.11-5.847 1.427-.57.595-.938 1.186-1.34 2.206-1.356 3.45.169 7.365 3.206 9.49l3.316 2.318c1.03.721 1.339 2.11.71 3.2a1.414 1.414 0 0 1-2.07.426L9.566 20.81c-4.594-3.424-6.79-9.647-4.23-14.773C5.894 4.92 6.402 4.23 7.09 3.558"
    })]
  }), {}));
  var N = {
    recommend: "recommend-cyna5Q",
    text: "text-uDas0o"
  };
  let $ = e => {
    let {
      storageKey: t,
      icon: n,
      buttonName: o,
      containerClassName: s,
      textClassName: l,
      link: c,
      title: d,
      dataTestId: u,
      show: h = true
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let [v, g] = reactCoreLibraryReexport.useState(() => !!storageWrapperWithFallback.LocalStorageWrapper.getItem(t));
    if (h) {
      return reactJsxRuntimeCoreReexport.jsxs("button", {
        className: a("flex items-center py-8 pl-12 pr-8 gap-8 min-w-192 w-full border-none bg-transparent text-14 font-medium rounded-8 hover:bg-s-color-bg-trans cursor-pointer text-s-color-text-secondary", s),
        "data-testid": u,
        onClick: () => {
          teaAnalyticsEventTracker.trackEvent("menu_click", {
            button_name: o
          });
          storageWrapperWithFallback.LocalStorageWrapper.setItem(t, "1");
          g(true);
          window.open(xssContentSanitizer.sanitizeUrl(c, null, {
            logType: "js.window.location",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRETktiRmt5T1hSa$-xWjFXa001-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
          }));
        },
        children: [n, reactJsxRuntimeCoreReexport.jsx("p", {
          className: a("flex-1 text-left s-font-small-strong", l),
          children: d
        }), !v && reactJsxRuntimeCoreReexport.jsx("div", {
          className: N.recommend,
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: N.text,
            children: f("navbar_recommend_tag")
          })
        })]
      });
    } else {
      return null;
    }
  };
  let M = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx($, {
      storageKey: "flow_avatar_closed_ola_friend",
      link: "https://www.olafriend.com/?from=doubao_pc",
      icon: reactJsxRuntimeCoreReexport.jsx(R, {
        className: "text-16"
      }),
      title: e("navbar_ola_friend_button_title"),
      buttonName: "ola_friend",
      dataTestId: "ola_friend_button",
      show: true
    });
  };
  let P = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx($, {
      storageKey: "flow_avatar_closed_marscode",
      link: "https://www.trae.cn/sem?utm_source=doubao&utm_medium=menu_new",
      icon: reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMi41NTY2IDIwLjY2Nkg0LjYwNTQ3VjE3LjU1MjdIMTkuNDQzNFY4LjY5ODI0SDQuNTU2NjRWMTcuNTUyN0gxLjQ0MzM2VjUuNTg0OTZIMjIuNTU2NlYyMC42NjZaIiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+CjxwYXRoIGQ9Ik05LjUyODMyIDExLjIwNDFDOS42ODAyOSAxMS4wNTIyIDkuOTI3MTMgMTEuMDUyMiAxMC4wNzkxIDExLjIwNDFMMTEuNzI0NiAxMi44NTA2QzExLjg3NjUgMTMuMDAyNiAxMS44NzY1IDEzLjI0ODQgMTEuNzI0NiAxMy40MDA0TDEwLjA3OTEgMTUuMDQ2OUM5LjkyNzEzIDE1LjE5ODggOS42ODAyOSAxNS4xOTg4IDkuNTI4MzIgMTUuMDQ2OUw3Ljg4MjgxIDEzLjQwMDRDNy43MzA5MyAxMy4yNDg0IDcuNzMwOTMgMTMuMDAyNiA3Ljg4MjgxIDEyLjg1MDZMOS41MjgzMiAxMS4yMDQxWiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xNS41NjA1IDExLjIwNDFDMTUuNzEyNSAxMS4wNTIyIDE1Ljk1OTMgMTEuMDUyMyAxNi4xMTEzIDExLjIwNDFMMTcuNzU2OCAxMi44NTA2QzE3LjkwODggMTMuMDAyNiAxNy45MDg4IDEzLjI0ODQgMTcuNzU2OCAxMy40MDA0TDE2LjExMTMgMTUuMDQ2OUMxNS45NTkzIDE1LjE5ODcgMTUuNzEyNSAxNS4xOTg4IDE1LjU2MDUgMTUuMDQ2OUwxMy45MTUgMTMuNDAwNEMxMy43NjMzIDEzLjI0ODUgMTMuNzYzMyAxMy4wMDI1IDEzLjkxNSAxMi44NTA2TDE1LjU2MDUgMTEuMjA0MVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRETktiRmt5T1hSa$-xWjFXa001-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
        }),
        className: "size-16"
      }),
      title: e("navbar_download_traeIDE"),
      buttonName: "install_marscode",
      dataTestId: "mars_code_button"
    });
  };
  var avatarPopoverMenu = require("avatar-popover-menu") /*id: 123858*/;
  var sidebarBookmarkLink = require("sidebar-bookmark-link") /*id: 154699*/;
  var O = {
    "marscode-text": "marscode-text-ga9Y5f",
    marscodeText: "marscode-text-ga9Y5f",
    avatar: "avatar-T1oykw",
    "avatar-popover": "avatar-popover-y2KUno",
    avatarPopover: "avatar-popover-y2KUno",
    "icon-huoshanfangzhou": "icon-huoshanfangzhou-sHuK6y",
    iconHuoshanfangzhou: "icon-huoshanfangzhou-sHuK6y"
  };
  let Z = `${doubaoConfigConstants_1.flowCdnUrl}/doubao/web/static/image/default-user-avatar.png`;
  let A = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-full px-8 py-4",
    children: reactJsxRuntimeCoreReexport.jsx("div", {
      className: "h-[0.5px] bg-s-color-border-secondary"
    })
  });
  let W = e => {
    let {
      utmSource: t,
      renderBeforeExitButton: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let c = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let d = "s-font-small-strong flex items-center py-8 pl-12 pr-10 gap-8 min-w-192 w-full border-none bg-transparent text-14 font-medium rounded-8 hover:bg-s-color-bg-trans cursor-pointer text-s-color-text-secondary";
    let {
      handleLogout: u
    } = logoutConfirmationFlow.createLogoutFlow({
      scene: "avatar_menu",
      clickEventName: "menu_click",
      clickEventParams: {
        button_name: "logout"
      },
      loginRoute: "/"
    });
    let g = reactCoreLibraryReexport.useMemo(() => [[{
      children: reactJsxRuntimeCoreReexport.jsx(creditPanelMenuItem.CreditPanelMenuItem, {})
    }, {
      children: reactJsxRuntimeCoreReexport.jsx(chatHeaderSettingsButton.ChatSettingsButton, {})
    }, {
      hide: !c,
      children: reactJsxRuntimeCoreReexport.jsx(sidebarBookmarkLink.BookmarkLink, {
        className: "flex items-center py-8 pl-12 pr-10 gap-8 min-w-192 rounded-8 hover:bg-s-color-bg-trans text-s-color-text-secondary"
      })
    }, {
      children: reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        utmSource: t,
        trackMeta: {
          showFrom: "click_profile_picture"
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: d,
          "data-testid": "download_item",
          onClick: () => {
            teaAnalyticsEventTracker.trackEvent("menu_click", {
              button_name: "download_pc_extension"
            });
          },
          children: [reactJsxRuntimeCoreReexport.jsx(rtlDocumentUploadIcon.DocumentUploadIcon, {
            className: "text-16"
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            children: o("navbar_download_button_title")
          })]
        })
      })
    }, {
      children: reactJsxRuntimeCoreReexport.jsx(downloadAppSidebarComponents.DownloadAppMenuItem, {})
    }], [{
      hide: false,
      "data-testid": "doubao_product_website",
      onClick: () => {
        teaAnalyticsEventTracker.trackEvent("menu_click", {
          button_name: "doubao_product_website"
        });
        window.open(xssContentSanitizer.sanitizeUrl("https://www.doubao.com/about", null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
        }));
      },
      icon: iconSunOutline.SunIcon,
      text: o("navbar_doubao_official_website_button_title")
    }, {
      hide: false,
      "data-testid": "model_team_button",
      onClick: () => {
        teaAnalyticsEventTracker.trackEvent("menu_click", {
          button_name: "model_team"
        });
        window.open(xssContentSanitizer.sanitizeUrl("https://team.doubao.com", null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
        }));
      },
      icon: C,
      text: o("navbar_doubaoLLM_team_button_title")
    }, {
      hide: false,
      "data-testid": "modal_service_button",
      onClick: () => {
        teaAnalyticsEventTracker.trackEvent("menu_click", {
          button_name: "model_service"
        });
        window.open(xssContentSanitizer.sanitizeUrl("https://www.volcengine.com/product/ark", null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
        }));
      },
      icon: k,
      text: o("navbar_doubaoLLM_service_button_title")
    }, {
      children: reactJsxRuntimeCoreReexport.jsx(M, {})
    }, {
      children: reactJsxRuntimeCoreReexport.jsx(P, {})
    }], [{
      hide: !n,
      customRender: n
    }, {
      "data-testid": "setup_logout",
      onClick: u,
      icon: exitToAppIcon_1.ExitToAppIcon,
      text: o("sign_out")
    }]], [c]);
    let _ = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: g.map((e, t) => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [e.map(e => {
          let {
            hide: n,
            children: i,
            icon: o,
            text: a,
            ...s
          } = e;
          if (e.hide) {
            return null;
          } else if (e.customRender) {
            return e.customRender();
          } else {
            return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: e.children || reactCoreLibraryReexport.createElement("button", {
                ...s,
                key: t,
                className: d
              }, o && reactJsxRuntimeCoreReexport.jsx(o, {
                className: "text-16"
              }), reactJsxRuntimeCoreReexport.jsx("p", {
                children: a
              }))
            });
          }
        }), t !== g.length - 1 && reactJsxRuntimeCoreReexport.jsx(A, {})]
      }))
    }), [g]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("text-s-color-text-secondary text-14 font-medium p-4 s-font-small-strong rounded-10", O.container),
      "data-testid": "chat_header_menu",
      children: _
    });
  };
  let B = e => {
    let {
      utmSource: n,
      renderBeforeExitButton: i,
      renderContent: o,
      outControlMoreVisible: s
    } = e;
    let [l, u] = reactCoreLibraryReexport.useState(false);
    let h = e => {
      u(e);
      if (e) {
        teaAnalyticsEventTracker.trackEvent("menu_show");
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof s == "boolean") {
        h(s);
      }
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(samanthaDownloadPopover.SamanthaDownloadPop, {
        popupID: chatNotificationConfig.notificationConfig.LoginKeyFeatureNotification?.id,
        position: "bottomRight",
        visible: l,
        button: reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
          content: reactJsxRuntimeCoreReexport.jsx(W, {
            utmSource: n,
            renderBeforeExitButton: i
          }),
          className: a(O["avatar-popover"], "rounded-16 mt-4"),
          trigger: "click",
          visible: l,
          onVisibleChange: h,
          clickToHide: true,
          children: o()
        })
      })
    });
  };
  let F = chatUiConfigRenderer.chatConfigRenderer(e => {
    let {
      className: t,
      ...n
    } = e;
    let r = chatUserInfoActions.subscribeUserInfo();
    let o = (r == null ? undefined : r.avatar_url) || Z;
    return reactJsxRuntimeCoreReexport.jsx(B, {
      ...n,
      renderContent: () => reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
        className: a(t, O.avatar, "w-28 h-28 border-[0.5px] border-solid border-s-color-border-tertiary bg-transparent !rounded-full"),
        src: xssContentSanitizer.sanitizeUrl(o, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
        }),
        "data-testid": "chat_header_avatar_button"
      })
    });
  }, avatarPopoverMenu.AvatarPopoverMenu, "sidebarV2");
  require.d(exports, {
    AvatarPopoverMenu: function () {
      return F;
    }
  });
}