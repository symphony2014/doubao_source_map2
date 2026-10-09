// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'reactIntersectionObserver'
// - Resolved require(637954) to 'react-intersection-observer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'thinkingQueryItem'
// - Resolved require(860711) to 'thinking-query-item'
// - Renamed variable 'd' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'u' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'p' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'm' to 'samanthaImagePreviewGallery'
// - Resolved require(927160) to 'samantha-image-preview-gallery'
// - Renamed variable 'v' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'f' to 'searchOutlinedIconComponent_1'
// - Resolved require(772730) to 'search-outlined-icon-component_1'
// - Renamed variable 'h' to 'refreshedImageListGallery'
// - Resolved require(785503) to 'refreshed-image-list-gallery'
// - Renamed variable 'g' to 'imageListClassMap'
// - Resolved require(749609) to 'image-list-class-map'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'YD' to 'useInView' (module 637954)
// - Updated imported property 'ZN' to 'messageRole' (module 617019)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'R' to 'ThinkingQueryItem' (module 860711)
// - Updated imported property 'Z' to 'SearchOutlinedIcon' (module 772730)
// - Updated imported property 'Z' to 'imageListClasses' (module 749609)
// - Updated imported property 'Y' to 'RefreshedImageList' (module 785503)
// - Updated imported property 'h' to 'ImagePreviewGallery' (module 927160)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 691965
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var searchOutlinedIconComponent_1 = require("search-outlined-icon-component_1") /*id: 772730*/;
  var refreshedImageListGallery = require("refreshed-image-list-gallery") /*id: 785503*/;
  var imageListClassMap = require("image-list-class-map") /*id: 749609*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      isBlockFinished: t,
      isBroken: n,
      blockContent: a,
      classname: u,
      imageListClassname: b
    } = e;
    let {
      summary: k,
      scene: y,
      results: x = []
    } = a || {};
    let [w, S] = reactCoreLibraryReexport.useState(false);
    let [R, $] = reactCoreLibraryReexport.useState(0);
    let {
      ref: C,
      inView: T
    } = reactIntersectionObserver.useInView();
    let {
      searchImageCards: j
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = x.map(e => e.image_card).filter(Boolean);
      let t = y === skillMessageLifecycleTypes.messageRole.Thinking;
      return {
        isThinkScene: t,
        resolveSummary: t ? k : "",
        searchImageCards: e
      };
    }, [x, y]);
    let N = reactCoreLibraryReexport.useMemo(() => j.map(e => {
      return e.full_size_url?.[0] || "";
    }), [j]);
    let {
      latestFileUrls: E
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: N,
      enable: w
    });
    let P = reactFunctionMemoHook.useMemoizedCallback(e => {
      $(j.findIndex(t => t === e));
      S(true);
    });
    if (!t && n || t && isEmptyUtil.isEmpty(j)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: C,
        children: [reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
          classname: u,
          loading: !t,
          title: k,
          prefixIcon: reactJsxRuntimeCoreReexport.jsx(searchOutlinedIconComponent_1.SearchOutlinedIcon, {
            className: "text-14 text-s-color-text-tertiary"
          }),
          hoverable: false
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(imageListClassMap.imageListClasses["image-list-wrap"], b),
          children: [reactJsxRuntimeCoreReexport.jsx(refreshedImageListGallery.RefreshedImageList, {
            className: imageListClassMap.imageListClasses["image-block"],
            images: j,
            onClick: P,
            inView: T
          }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
            src: xssContentSanitizer.sanitizeUrl(E, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0Z%hST%0wNT$XW*s1-$d*WWIz%lpNamwwWTBjNWRWcFhO$EJqZ$RsNldsZEdl$mt5WjNSald*WnNZMj$yZEdOdFZuc*tWM2d3$EZkc2R*bFhaR3hN$jBwellqSk9ja3d5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
            }),
            visible: w,
            onVisibleChange: S,
            currentIndex: R,
            onChange: $
          })]
        })]
      });
    }
  };
  let k = e => {
    let {
      message: t,
      classname: n,
      imageListClassname: i,
      contentBlock: l
    } = e;
    let {
      is_finish: r
    } = l ?? {};
    let o = messageContentTypeAndStatusChecker.vlk(t);
    return reactJsxRuntimeCoreReexport.jsx(b, {
      isBlockFinished: r,
      isBroken: o,
      blockContent: l == null ? undefined : l.content_obj,
      classname: n,
      imageListClassname: i
    });
  };
  require.r(exports);
  require.d(exports, {
    SearchImageBlock: function () {
      return k;
    },
    SearchImageBlockInner: function () {
      return b;
    }
  });
}