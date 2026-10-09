// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'linkComponentHandler'
// - Resolved require(94706) to 'link-component-handler'
// - Renamed variable 'a' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 's' to 'urlParamUtils'
// - Resolved require(919916) to 'url-param-utils'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'm' to 'chatMessageMetaTypeCheckers'
// - Resolved require(156228) to 'chat-message-meta-type-checkers'
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'Ad' to 'parseUrlSafe' (module 919916)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property '_O' to 'parseMarkdownLink' (module 80625)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'Rk' to 'searchTypes' (module 156228)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 686473
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var linkComponentHandler = require("link-component-handler") /*id: 94706*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      title: n,
      link: l,
      onTrackEvent: r
    } = e;
    let i = functionInvoker.invoke(() => {
      let e = l ? urlParamUtils.parseUrlSafe(l) : null;
      if (e) {
        return e.searchParams.get("url");
      } else {
        return "";
      }
    });
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        ref: t,
        children: reactJsxRuntimeCoreReexport.jsx("a", {
          className: "blue-link-FprVWw",
          onClick: () => {
            if (r != null) {
              r("named_entity_recognition_click", {
                name: n
              });
            }
          },
          href: xssContentSanitizer.sanitizeUrl(i || undefined, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1SSFZq%mtRekZxWWpJM%1*cFhO$EJNTW14M$l6Sldl$1JET$d4a$IxWjBXb*MxT%dON%9-b*FXR%p6$1ZkT2J*bFhTbk5h$Xpsc$lqSXhkMkl5Tld4aWJsSjZ%REpL-zJSWFZ-%mlSMngxW$hrM%1HTXphR2hq-ldReFkz-zlQ%T09"
          }),
          target: "_blank",
          children: n
        })
      });
    } else {
      return null;
    }
  });
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var chatMessageMetaTypeCheckers = require("chat-message-meta-type-checkers") /*id: 156228*/;
  let h = e => {
    let {
      onLinkClick: t,
      onTrackEvent: n,
      onSendMessage: a,
      value: {
        replace_text: s = "",
        source_type: h = ""
      }
    } = e;
    let {
      groups: _
    } = markdownMetaRenderUtils.parseMarkdownLink(s);
    let [p, v] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let f = h === chatMessageMetaTypeCheckers.searchTypes.SearchCtrip;
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        if (n != null) {
          n("named_entity_recognition_show", {
            name: _ == null ? undefined : _.title
          });
        }
      }
    }, [v]);
    if ((_ == null ? undefined : _.title) && (_ == null ? undefined : _.link)) {
      if (f) {
        return reactJsxRuntimeCoreReexport.jsx(c, {
          ref: p,
          title: _.title,
          link: _.link
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          ref: p,
          className: "mdbox-link-xQGJds",
          children: reactJsxRuntimeCoreReexport.jsx(linkComponentHandler.Link, {
            className: "link-Erf0re",
            href: xssContentSanitizer.sanitizeUrl(_ == null ? undefined : _.link, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1SSFZq%mtRekZxWWpJM%1*cFhO$EJNTW14M$l6Sldl$1JET$d4a$IxWjBXb*MxT%dON%9-b*FXR%p6$1ZkT2J*bFhTbk5h$Xpsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
            }),
            onLinkClick: (e, o) => {
              if (n != null) {
                n("named_entity_recognition_click", {
                  name: _ == null ? undefined : _.title
                });
              }
              if (t != null) {
                t(e, o);
              }
            },
            onSendMessage: a,
            children: _ == null ? undefined : _.title
          })
        });
      }
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    Replaceable: function () {
      return h;
    }
  });
}