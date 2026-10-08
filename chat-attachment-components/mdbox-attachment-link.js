// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'a' to 'attachmentNodeRenderer'
// - Resolved require(999896) to 'attachment-node-renderer'
// - Renamed variable 'o' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 's' to 'fileUrlRefreshUtils'
// - Resolved require(66377) to 'file-url-refresh-utils'
// - Renamed variable 'c' to 'urlValidator'
// - Resolved require(714614) to 'url-validator'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'v' to 'fileDownloadUtilities'
// - Resolved require(552822) to 'file-download-utilities'
// - Renamed variable 'p' to 'mdBoxLazyComponentsModule'
// - Resolved require(857296) to 'md-box-lazy-components-module'
// - Renamed variable 'f' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'm' to 'rtlLinkIcon'
// - Resolved require(70222) to 'rtl-link-icon'
// - Renamed variable 'h' to 'sandboxFileUrlCheck'
// - Resolved require(675258) to 'sandbox-file-url-check'
// - Renamed variable '_' to 'urlSchemeCheckUtils'
// - Resolved require(566301) to 'url-scheme-check-utils'
// - Renamed variable 'g' to 'noopDownloadAttachmentHandler'
// - Resolved require(862937) to 'noop-download-attachment-handler'
// - Renamed variable 'w' to 'reactUrlSchemeResolverHook'
// - Resolved require(373481) to 'react-url-scheme-resolver-hook'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'LinkIcon' (module 70222)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'f' to 'stubEventHandlers' (module 862937)
// - Updated imported property 'P' to 'isValidUrl' (module 714614)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'O' to 'useUrlSchemeResolver' (module 373481)
// - Updated imported property 'I' to 'getUrlExpireTime' (module 66377)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'Bj' to 'isSandboxUrl' (module 566301)
// - Updated imported property 'kT' to 'isFlowFileUrl' (module 566301)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Eo' to 'lazyLinkComponent' (module 857296)
// - Updated imported property 'I' to 'checkSandboxFileUrl' (module 675258)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property '$A' to 'downloadFileViaBlob' (module 552822)
// - Updated imported property 'J' to 'renderAttachmentNode' (module 999896)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 888359
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var fileUrlRefreshUtils = require("file-url-refresh-utils") /*id: 66377*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var sandboxFileUrlCheck = require("sandbox-file-url-check") /*id: 675258*/;
  var urlSchemeCheckUtils = require("url-scheme-check-utils") /*id: 566301*/;
  var noopDownloadAttachmentHandler = require("noop-download-attachment-handler") /*id: 862937*/;
  var reactUrlSchemeResolverHook = require("react-url-scheme-resolver-hook") /*id: 373481*/;
  let k = {};
  var y = {
    link: "link-vgJXl0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = () => reactJsxRuntimeCoreReexport.jsx("span", {
    style: {
      alignItems: "center",
      background: "var(--s-color-bg-trans, #0000000f)",
      borderRadius: 6,
      color: "var(--s-color-text-tertiary)",
      cursor: "pointer",
      display: "inline-block",
      fontWeight: 500,
      height: 19,
      lineHeight: "16px",
      padding: "2px 6px",
      position: "relative",
      userSelect: "none",
      verticalAlign: "text-bottom"
    },
    children: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
      className: "text-16"
    })
  });
  let S = e => {
    var n;
    var m;
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let {
      uriToUrlMap: R,
      events: x,
      ...C
    } = e;
    let N = {
      ...noopDownloadAttachmentHandler.stubEventHandlers,
      ...(x ?? {})
    };
    let E = reactCoreLibraryReexport.useMemo(() => {
      var t;
      if (!C.href || !urlValidator.isValidUrl(C.href)) {
        return;
      }
      let n = C == null ? undefined : (t = C.children) === null || t === undefined ? undefined : t.props?.children;
      if (n && isStringTypeCheck.isString(n)) {
        return n;
      } else {
        return function (e) {
          var t;
          if (!urlValidator.isValidUrl(e)) {
            return;
          }
          let [n] = ((e = decodeURI(e)) == null ? undefined : e.split("?")) || [];
          let i = (t = decodeURI(n)) === null || t === undefined ? undefined : t.match(/([^/]+)\.[^/]+$/);
          if (i) {
            return i[0];
          } else {
            return undefined;
          }
        }(C.href);
      }
    }, [C.href, C == null ? undefined : (n = C.children) === null || n === undefined ? undefined : n.props?.children]);
    let W = reactUrlSchemeResolverHook.useUrlSchemeResolver(C.href, R);
    let P = reactCoreLibraryReexport.useMemo(() => {
      if (!W) {
        return false;
      }
      let e = fileUrlRefreshUtils.getUrlExpireTime(W);
      return !!e && !(Number(e) > Date.now() / 1000 + 600);
    }, [W]);
    let {
      latestFileUrls: I
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [W],
      enable: P
    });
    let T = I[0];
    let j = !!T;
    let Z = urlSchemeCheckUtils.isSandboxUrl(C.href) || urlSchemeCheckUtils.isFlowFileUrl(C.href);
    let F = reactCoreLibraryReexport.useMemo(() => function e(t) {
      if (!t) {
        return "";
      }
      if (t.type === "text") {
        if ("data" in t) {
          return String(t.data ?? "");
        } else {
          return "";
        }
      }
      if ("children" in t && Array.isArray(t.children)) {
        return t.children.map(e).join("");
      } else {
        return "";
      }
    }(C.raw).trim() === "[__LINK_ICON]", [C.raw]);
    if (!Z && (m = C.href) && (m.startsWith("sslocal://flow/zproject/main") || (m.startsWith("sslocal://lynxview") || m.startsWith("sslocal://webview")) && m.includes("z_activity_lynx_template"))) {
      let {
        children: e,
        style: t
      } = C;
      return reactJsxRuntimeCoreReexport.jsx("a", {
        className: `
          ${y.link}
          md-box-solid-color
        `,
        style: t,
        onClick: e => {
          e.preventDefault();
          samanthaToastFactory.toastInstance.info(S("open_doubao_app_join_z", "请打开豆包 APP 参与活动"));
        },
        href: xssContentSanitizer.sanitizeUrl(C.href, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZDRjR0p0-zNaWk1tdDBZa2RzZFd*N%5%QmpNMmhvWTIxa01XTjNQ$DA9"
        }),
        children: e
      });
    }
    if (!Z) {
      let {
        children: e,
        style: t,
        ...n
      } = C;
      let r = F ? {
        ...(t ?? {}),
        textDecoration: "none"
      } : t;
      return reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyLinkComponent, {
        ...n,
        style: r,
        onLinkClick: function () {
          var e;
          var t = arguments.length;
          var n = Array(t);
          var r = 0;
          for (; r < t; r++) {
            n[r] = arguments[r];
          }
          let l = n[1];
          sandboxFileUrlCheck.checkSandboxFileUrl({
            src: xssContentSanitizer.sanitizeUrl(C.href || "", null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZDRjR0p0-zNaWk1tdDBZa2RzZFd*N%5%QmpNMmhvWTIxa01XTjNQ$DA9"
            }),
            url: l.url,
            uriToUrlStr: safeJsonUtils.safeStringify(R)
          });
          if ((e = C.onLinkClick) !== null && e !== undefined) {
            e.call(C, ...n);
          }
        },
        children: F ? reactJsxRuntimeCoreReexport.jsx($, {}) : e
      });
    }
    return reactJsxRuntimeCoreReexport.jsx("span", {
      style: {
        display: "inline-block",
        cursor: j ? "pointer" : "not-allowed"
      },
      onClick: () => {
        let e = {
          src: xssContentSanitizer.sanitizeUrl(T, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZDRjR0p0-zNaWk1tdDBZa2RzZFd*N%5%QmpNMmhvWTIxa01XTjNQ$DA9"
          }),
          name: E
        };
        N.onClickAttachment(e);
        if (j) {
          var t;
          if ((t = k.onDownloadStart) !== null && t !== undefined) {
            t.call(k);
          }
          fileDownloadUtilities.downloadFileViaBlob(T, E);
          if (N != null) {
            N.onDownloadEvent(e);
          }
        }
      },
      onMouseEnter: () => {
        sandboxFileUrlCheck.checkSandboxFileUrl({
          src: xssContentSanitizer.sanitizeUrl(C.href || "", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZDRjR0p0-zNaWk1tdDBZa2RzZFd*N%5%QmpNMmhvWTIxa01XTjNQ$DA9"
          }),
          url: T || "",
          uriToUrlStr: safeJsonUtils.safeStringify(R)
        });
      },
      children: reactJsxRuntimeCoreReexport.jsx(attachmentNodeRenderer.renderAttachmentNode, {
        fileKey: T,
        fileName: E,
        enableScaleUpAction: false,
        viewOnly: true
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    MdboxCILink: function () {
      return S;
    }
  });
}