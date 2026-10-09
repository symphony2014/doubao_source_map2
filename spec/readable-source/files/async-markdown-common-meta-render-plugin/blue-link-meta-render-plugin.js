// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'i' to 'markdownMetaRenderPlugin'
// - Resolved require(305922) to 'markdown-meta-render-plugin'
// - Renamed variable 'a' to 'markdownMetaRenderTypes'
// - Resolved require(912092) to 'markdown-meta-render-types'
// - Renamed variable 'l' to 'chatMetaTypes'
// - Resolved require(312169) to 'chat-meta-types'
// - Renamed variable 'o' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 's' to 'utf8EncodingUtils_1'
// - Resolved require(858081) to 'utf8-encoding-utils_1'
// - Renamed variable 'd' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'u' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(54105) to 'ner-replaceable-component'
// - Resolved require.bind(686473) to 'markdown-link-replacer'
// - Renamed variable 'f' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'm' to 'reactIntersectionObserver'
// - Resolved require(637954) to 'react-intersection-observer'
// - Renamed variable 'g' to 'linkComponentHandler'
// - Resolved require(94706) to 'link-component-handler'
// - Renamed variable '_' to 'urlLinkNormalizer'
// - Resolved require(365828) to 'url-link-normalizer'
// - Renamed variable 'R' to 'urlParamUtils'
// - Resolved require(919916) to 'url-param-utils'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property '_O' to 'parseMarkdownLink' (module 80625)
// - Updated imported property 'MR' to 'hasAppletId' (module 80625)
// - Updated imported property 'N_' to 'isValidUrl' (module 80625)
// - Updated imported property 'nw' to 'normalizeLink' (module 365828)
// - Updated imported property 'fz' to 'MetaTypes' (module 312169)
// - Updated imported property 'YD' to 'useInView' (module 637954)
// - Updated imported property 'Ad' to 'parseUrlSafe' (module 919916)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'B' to 'MetaRenderTypes' (module 912092)
// - Updated imported property 'K' to 'Utf8Utils' (module 858081)
// - Updated imported property 'X' to 'MetaRenderPlugin' (module 305922)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 715788
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var markdownMetaRenderPlugin = require("markdown-meta-render-plugin") /*id: 305922*/;
  var markdownMetaRenderTypes = require("markdown-meta-render-types") /*id: 912092*/;
  var chatMetaTypes = require("chat-meta-types") /*id: 312169*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("ner-replaceable-component") /*id: 54105*/.then(require.bind(require, "markdown-link-replacer") /*id: 686473*/)).then(e => ({
    default: e.Replaceable
  }))));
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var linkComponentHandler = require("link-component-handler") /*id: 94706*/;
  var urlLinkNormalizer = require("url-link-normalizer") /*id: 365828*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let v = e => {
    if (e == null ? undefined : e.pathname.includes("fpa_ecommercial")) {
      return "ecommerce_product";
    }
  };
  let y = [{
    match: e => {
      let {
        metaInfoData: n
      } = e;
      let {
        replace_text: r
      } = n;
      let {
        groups: i
      } = markdownMetaRenderUtils.parseMarkdownLink(r);
      return markdownMetaRenderUtils.hasAppletId((i == null ? undefined : i.link) ?? "");
    },
    pluginRender: reactCoreLibraryReexport.memo(function (e) {
      let {
        metaInfoData: t,
        onLinkClick: n,
        onTrackEvent: r,
        metaInfos: i
      } = e;
      let {
        replace_text: a
      } = t;
      let {
        groups: s
      } = markdownMetaRenderUtils.parseMarkdownLink(a);
      let c = (s == null ? undefined : s.link) && urlLinkNormalizer.normalizeLink(s.link);
      let u = reactCoreLibraryReexport.useMemo(() => i.filter(e => e.type === chatMetaTypes.MetaTypes.MetaType_BlueLink).findIndex(e => e.data === t), [i, t]);
      let [h, y] = reactIntersectionObserver.useInView({
        triggerOnce: true,
        initialInView: false,
        threshold: 1
      });
      let x = reactCoreLibraryReexport.useMemo(() => {
        let e = c ? urlParamUtils.parseUrlSafe(c) : undefined;
        return {
          position: u > -1 ? u + 1 : undefined,
          text: s == null ? undefined : s.title,
          link_type: v(e),
          bcm_id: e == null ? undefined : e.searchParams.get("bcm_id"),
          entity_id: e == null ? undefined : e.searchParams.get("entity_id")
        };
      }, [c, u, s == null ? undefined : s.title]);
      reactCoreLibraryReexport.useEffect(() => {
        if (y) {
          if (r != null) {
            r("highlight_word_show", x);
          }
        }
      }, [y]);
      if ((s == null ? undefined : s.title) && c) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          ref: h,
          children: reactJsxRuntimeCoreReexport.jsx(linkComponentHandler.Link, {
            href: xssContentSanitizer.sanitizeUrl(c, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHB0-khsak0xRjBZM*RHZ$dSSWEzWmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*x0Z%R*-$$6RnpZ$mMx-2t4WFduWmph$E-x$2xob01Fd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
            }),
            onLinkClick: (e, t) => {
              if (r != null) {
                r("click_special_soft_link", x);
              }
              if (n != null) {
                n(e, t);
              }
            },
            children: s.title
          })
        });
      } else {
        return null;
      }
    })
  }, {
    match: () => true,
    pluginRender: e => {
      let {
        metaInfoData: t,
        onTrackEvent: n,
        onLinkClick: r,
        onSendMessage: i
      } = e;
      let a = reactCoreLibraryReexport.useMemo(() => {
        let {
          replace_text: e,
          source_type: n
        } = t;
        return {
          replace_text: e,
          source_type: n
        };
      }, []);
      return reactJsxRuntimeCoreReexport.jsx(h, {
        value: a,
        onTrackEvent: n,
        onLinkClick: r,
        onSendMessage: i
      });
    }
  }];
  let x = {
    strategy: markdownMetaRenderTypes.MetaRenderTypes.RANGE,
    metaType: chatMetaTypes.MetaTypes.MetaType_BlueLink,
    getRange: e => {
      let {
        metaInfo: t,
        text: n
      } = e;
      let {
        start: r,
        end: i
      } = t;
      return [r, i].map(e => utf8EncodingUtils_1.Utf8Utils.posCalc(n, e));
    },
    Content: e => {
      let {
        metaInfoData: n
      } = e;
      let a = markdownMetaRenderPlugin.MetaRenderPlugin;
      let {
        start: l,
        end: s,
        replace_text: d,
        source_type: c
      } = n;
      if (isUndefinedCheck.isUndefined(l) || isUndefinedCheck.isUndefined(s)) {
        return null;
      }
      let {
        groups: u
      } = markdownMetaRenderUtils.parseMarkdownLink(d);
      if (markdownMetaRenderUtils.isValidUrl((u == null ? undefined : u.link) ?? "", c)) {
        return null;
      } else {
        return reactJsxRuntimeCoreReexport.jsx(a, {
          plugins: y,
          ...e
        });
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    BlueLinkMetaRenderPlugin: function () {
      return x;
    }
  });
}