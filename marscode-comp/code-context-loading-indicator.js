// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 't' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'businessLayoutConstants'
// - Resolved require(252973) to 'business-layout-constants'
// - Renamed variable 'a' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 's' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Jq' to 'ItemType' (module 252973)
// - Updated imported property 'pu' to 'sourceType' (module 447912)
// - Updated imported property 'Cr' to 'processingStatus' (module 447912)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: marscode-comp.dd5585e2.js
         * chunkId: 45089
         * moduleId: 833395
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = {
    [businessLayoutConstants.ItemType.Directory]: chatAiConstants.sourceType.DirectoryID,
    [businessLayoutConstants.ItemType.Link]: chatAiConstants.sourceType.RepoID
  };
  let d = A => {
    let {
      resourceKey: e,
      resourceType: i
    } = A;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [d, w] = reactCoreLibraryReexport.useState(false);
    let g = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let A = 0;
      function n() {
        if (g.current) {
          clearTimeout(g.current);
        }
        g.current = null;
      }
      g.current = window.setTimeout(function r() {
        if (A > 100) {
          n();
          return;
        }
        apiServicesCollection.SamanthaApiService.GetCodeContextState({
          type: o[i],
          resource_key: [e]
        }).then(i => {
          let {
            data: r
          } = i;
          A++;
          let t = r == null ? undefined : r.states;
          if (!t) {
            return;
          }
          let {
            status: l
          } = t.find(A => A.resource_key === e) || {};
          if (l === chatAiConstants.processingStatus.Succeed) {
            w(false);
            n();
            return;
          }
          w(true);
        });
        g.current = window.setTimeout(r, 3000);
      }, 300);
      return () => {
        n();
      };
    }, [e, i]);
    if (d) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "container-hKkZOM",
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBzZa/L0NRHMVPGQipSEj8CEmJiMEgMdkaBhZiwmjwB4jZYrOIWYjV4lfUJEFjM0hMNF3agUGTImkkgoTzzXuN19v7rd6WxEk+Sd+539fT+773vltAV5Sck0+SIvNKXTfZJbc+K6QJjor6QSaLlrBLcm+wDUedK4Epo27GEpan2/bFNfY8RMr0R6CrCw6B12X6N9B1BwcNkScUP9Jpo04Wh62HS6hAEXIAr2/S06hSJ71aJyfwVusC/pNqA58jPvXkGdUrTMZJJ3kjOTFDpJnMkfZAcYIckldUpkl4fQwHPHkhxGSGE6TPuKGVfJA03CUz2iB1hj9M9mVbDCg3av5P6ld8mW20Br+vcImxnAQmlMEEKlMc/gKxKCk9TJNBeKszL/EOUZlkRT6icN/KD1glV6GAOYDvLZFG9ZLFI/2URxyHPuu/VajEmLztZT/JqytLYiRpqWskU2SUZMgZOYVjYAtZJg2Gv2YJ3SRthndEtmCRti1mLWGiSeN6zBImkhk3wiGwS/HNTd0DXb1wCMyW6WegK+MSGFP8Y+NaFseDpe5M8QuOp6BkJvIXoQPeqZ71wy6Mund4J748WunlC9kjO/5Ykb4AOLRsbpKrddsAAAAASUVORK5CYII=", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$i$0pIT1ROT$-wNTJXa2RzZFZwN%1-ZFpWMlJz$ERKT2RtSllRblpp-lZaM$pFaE5kb%5I%m5sak1s$jBZa2M1-%ZwS*JI$mFl$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
          }),
          className: "icon-SzhPZy"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-secondary ml-5",
          children: l("cici_web_ai_coding_index_construction_loading")
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ParseLoading: function () {
      return d;
    }
  });
}