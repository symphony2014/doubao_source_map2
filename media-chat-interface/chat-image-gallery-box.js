// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'samanthaImagePreviewGallery'
// - Resolved require(927160) to 'samantha-image-preview-gallery'
// - Renamed variable 'd' to 'chatResponsiveSize'
// - Resolved require(836635) to 'chat-responsive-size'
// - Renamed variable 's' to 'reactCarouselComponent'
// - Resolved require(464116) to 'react-carousel-component'
// - Renamed variable 'c' to 'useParamsResolver'
// - Resolved require(790576) to 'use-params-resolver'
// - Renamed variable 'u' to 'imageCardRemainCount'
// - Resolved require(163009) to 'image-card-remain-count'
// - Renamed variable 'm' to 'gridContainerComponent'
// - Resolved require(329811) to 'grid-container-component'
// - Renamed variable 'p' to 'optimizedImageCard'
// - Resolved require(686991) to 'optimized-image-card'
// - Renamed variable 'h' to 'chatImageGroupComponents'
// - Resolved require(976339) to 'chat-image-group-components'
// - Renamed variable 'v' to 'chatMessageUtils'
// - Resolved require(898330) to 'chat-message-utils'
// - Renamed variable '_' to 'chatImageGroupLayout'
// - Resolved require(270250) to 'chat-image-group-layout'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'U' to 'useParamsResolver' (module 790576)
// - Updated imported property 'jg' to 'extractPrefix' (module 898330)
// - Updated imported property 'bg' to 'getPlatformType' (module 898330)
// - Updated imported property 'eA' to 'getCornerClasses' (module 898330)
// - Updated imported property 'a' to 'getImageGroupConfig' (module 270250)
// - Updated imported property 'H' to 'getGridLayout' (module 270250)
// - Updated imported property 'y' to 'useChatScreenSize' (module 836635)
// - Updated imported property 'w' to 'GridContainer' (module 329811)
// - Updated imported property 'h' to 'ImageGalleryCard' (module 163009)
// - Updated imported property 'l' to 'Carousel' (module 464116)
// - Updated imported property 'l' to 'OptimizedImageCard' (module 686991)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'h' to 'ImagePreviewGallery' (module 927160)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 345989
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var imageCardRemainCount = require("image-card-remain-count") /*id: 163009*/;
  var gridContainerComponent = require("grid-container-component") /*id: 329811*/;
  var optimizedImageCard = require("optimized-image-card") /*id: 686991*/;
  var chatImageGroupComponents = require("chat-image-group-components") /*id: 976339*/;
  var chatMessageUtils = require("chat-message-utils") /*id: 898330*/;
  var chatImageGroupLayout = require("chat-image-group-layout") /*id: 270250*/;
  var g = {
    container: "container-dgjMlp",
    "image-container": "image-container-U0uncr",
    imageContainer: "image-container-U0uncr",
    "image-container-border": "image-container-border-nuCxs9",
    imageContainerBorder: "image-container-border-nuCxs9"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function x(e) {
    let {
      images: i,
      imagesList: t,
      imagesOptions: l,
      onDownload: x
    } = e;
    let {
      token: w
    } = useParamsResolver.useParamsResolver();
    let b = chatMessageUtils.extractPrefix(w);
    let $ = chatMessageUtils.getPlatformType(b);
    let k = i.length === 1 && $ === "mobile";
    let y = reactCoreLibraryReexport.useRef(null);
    let R = reactCoreLibraryReexport.useRef(false);
    let [T, S] = reactCoreLibraryReexport.useState(0);
    let [j, N] = reactCoreLibraryReexport.useState(256);
    let [W, E] = reactCoreLibraryReexport.useState(192);
    let {
      enableNewImageGroup: Z
    } = chatImageGroupLayout.getImageGroupConfig();
    let F = chatResponsiveSize.useChatScreenSize({
      sm: 462,
      md: 899
    });
    let M = F === "sm";
    let C = M ? 6 : 3;
    let P = i.slice(0, C);
    let B = P.length;
    let z = Z && B > 1;
    let {
      columns: D,
      rows: V
    } = chatImageGroupLayout.getGridLayout(B, M);
    reactCoreLibraryReexport.useEffect(() => {
      if (!y.current || !k) {
        return;
      }
      let e = new ResizeObserver(e => {
        for (let i of e) {
          S(i.contentRect.width);
        }
      });
      e.observe(y.current);
      return () => {
        e.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!R.current && T > 0 && k) {
        let e = i[0];
        R.current = true;
        if (e.width && e.width > 0 && e.height && e.height > 0) {
          if (T < 256) {
            N(T);
            E(T * e.height / e.width);
          } else {
            let i = (T < 509 ? T : 509) / 3 * 2;
            if (e.width > e.height) {
              N(i);
              E(i * e.height / e.width);
            } else {
              E(i);
              N(i * e.width / e.height);
            }
          }
        }
      }
    }, [T, k]);
    let [X, L] = reactCoreLibraryReexport.useState(false);
    let [H, I] = reactCoreLibraryReexport.useState(0);
    let O = t == null ? undefined : t.map(e => {
      return e.full_size_url?.[0] || "";
    });
    let {
      isEmptySearch: A,
      isPosIndexZero: J
    } = l ?? {};
    let q = J && {
      paddingTop: 0
    };
    if (A) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: g.container,
        style: {
          ...q
        },
        children: reactJsxRuntimeCoreReexport.jsx(chatImageGroupComponents.ImageFoundNothing, {})
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(g.container, "no-spacing-before"),
        style: {
          ...q
        },
        ref: y,
        children: [z ? reactJsxRuntimeCoreReexport.jsx(gridContainerComponent.GridContainer, {
          appSize: F,
          columns: D,
          rows: V,
          children: P == null ? undefined : P.map((e, t) => reactJsxRuntimeCoreReexport.jsx(imageCardRemainCount.ImageGalleryCard, {
            item: e,
            isSmallMode: M,
            classname: a(chatMessageUtils.getCornerClasses(t, B, M)),
            footerClassName: chatMessageUtils.getCornerClasses(t, B, M),
            containerStyles: {
              maxWidth: j,
              maxHeight: W
            },
            isLastImage: t === C - 1,
            remainCount: i.length - C,
            onClick: () => {
              L(true);
              I(O == null ? undefined : O.findIndex(i => {
                return i === (e == null ? undefined : e.full_size_url?.[0]);
              }));
            }
          }))
        }) : reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
          arrowSize: "medium",
          carouselRowClassName: g["carousel-row"],
          children: i == null ? undefined : i.map((e, i) => reactJsxRuntimeCoreReexport.jsx(optimizedImageCard.OptimizedImageCard, {
            className: a(g["image-container"], !k && g["image-container-border"]),
            onImageClick: () => {
              let i = O == null ? undefined : O.findIndex(i => {
                return i === (e == null ? undefined : e.full_size_url?.[0]);
              });
              L(true);
              I(i);
            },
            imgCaption: e == null ? undefined : e.img_caption,
            src: xssContentSanitizer.sanitizeUrl(e.thumb_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haaFZ6Rm9XakpWZEdOS$Zub*F$ekZwWWpObmRtRlhO$3Rh$0dkM$pFaE9ORmxZ%201a1dFMDk"
            }),
            imageOptions: {
              squareContainer: false,
              width: j,
              height: W,
              objectFit: "cover"
            },
            wrapperStyle: {
              width: j,
              height: W
            },
            errorClassName: g["img-error"]
          }, `${e.id}_index`))
        }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
          visible: X,
          onVisibleChange: L,
          src: xssContentSanitizer.sanitizeUrl(O, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haaFZ6Rm9XakpWZEdOS$Zub*F$ekZwWWpObmRtRlhO$3Rh$0dkM$pFaE9ORmxZ%201a1dFMDk"
          }),
          currentIndex: H,
          onChange: I,
          onDownload: x
        })]
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageBoxPure: function () {
      return x;
    }
  });
}