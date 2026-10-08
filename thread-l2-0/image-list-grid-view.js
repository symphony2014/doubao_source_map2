// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'ImageListGrid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 332524
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var imageStatusEnum = require("image-status-enum") /*id: 923272*/;
  var imageBoxGrid = require("image-box-grid") /*id: 692304*/;
  var imageThinkingComponent = require("image-thinking-component") /*id: 602617*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var batchDownloadImageCheckboxWrapper = require("batch-download-image-checkbox-wrapper") /*id: 144026*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var o;
    var _;
    var f;
    var b;
    var w;
    let {
      data: E,
      eventCallbacks: I,
      style: S,
      gap: T = 4,
      renderHoverEle: j,
      children: N,
      overideContextMenuEvent: $ = false,
      getImageThumbUrl: R,
      getOtherFormatSrc: P,
      imageOptions: O,
      isSmall: Z = false,
      message: F,
      ...M
    } = e;
    let {
      onImageClick: A,
      onImageRender: W,
      onImageContextMenu: D,
      onImageMouseEnter: L
    } = I || {};
    let B = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    let G = B ? "dark" : "light";
    let V = reactUseChangedRef.useChangedRef((E == null ? undefined : (o = E.image_list) === null || o === undefined ? undefined : (n = o.map) === null || n === undefined ? undefined : n.call(o, e => {
      return (R == null ? undefined : R(e)) || e.image_thumb?.url || e.image_ori?.url || "";
    })) ?? [], deepEqualUtil_1.deepEqual);
    let z = reactUseChangedRef.useChangedRef(V.filter((e, t) => {
      return !collectionIncludesUtil.includes([imageStatusEnum.imageStatusEnum.ImageStatusBanned, imageStatusEnum.imageStatusEnum.ImageStatusFailed], E == null ? undefined : E.image_list[t]?.status);
    }).map(e => ({
      url: e,
      status: imageBoxGrid.gridStatus.Success
    })), deepEqualUtil_1.deepEqual);
    let X = reactUseChangedRef.useChangedRef((E == null ? undefined : (f = E.image_list) === null || f === undefined ? undefined : (_ = f.map) === null || _ === undefined ? undefined : _.call(f, e => P == null ? undefined : P(e))) ?? [], deepEqualUtil_1.deepEqual);
    let U = E == null ? undefined : (b = E.image_list) === null || b === undefined ? undefined : b.find(e => {
      if (e == null) {
        return undefined;
      } else {
        return e.image_thumb?.width;
      }
    });
    let H = U == null ? undefined : U.image_thumb?.width;
    let J = U == null ? undefined : U.image_thumb?.height;
    if (isNullishCheck.isNil(H) || isNullishCheck.isNil(J)) {
      H = 1024;
      J = 1024;
    }
    let q = H / J;
    let K = E == null ? undefined : (w = E.image_list) === null || w === undefined ? undefined : w.every(e => !(e == null ? undefined : e.isThinking));
    return reactJsxRuntimeCoreReexport.jsx(imageBoxGrid.ImageBoxGrid, {
      ref: t,
      "data-finished": K,
      imgList: z,
      ratio: q,
      gap: T,
      style: {
        maxWidth: "calc( 100%)",
        ...(S || {})
      },
      itemClassName: "",
      width: H,
      height: J,
      ...M,
      children: (e, t) => {
        let l = E == null ? undefined : E.image_list?.[t];
        let r = (l == null ? undefined : l.isThinking) ? reactJsxRuntimeCoreReexport.jsx(imageThinkingComponent.ImageThinkingView, {
          mode: G,
          className: "h-0 w-full",
          showCenterIcon: !Z,
          width: H,
          height: J
        }, `${t}_${l == null ? undefined : l.key}`) : reactJsxRuntimeCoreReexport.jsx(batchDownloadImageCheckboxWrapper.ImageCheckboxWrapper, {
          imageContent: l,
          message: F,
          onImageClick: (e, t) => A == null ? undefined : A(e, t, l, E.image_list),
          onImageRender: W,
          src: xssContentSanitizer.sanitizeUrl(e, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRPZ*1Kd$$te*libE-y$1RJNWRHTkhPWFZh$np$d1kzaz$jR0p-%m01-$$6RnBZak5uZ*1*WE5Xd*FXR2QxWk$oT05*bFlTbT$r$0%wOQ"
          }),
          otherFormatSrc: {
            webpSrc: X[t]?.webpSrc,
            avifSrc: X[t]?.avifSrc
          },
          renderHoverEle: e => l && (j == null ? undefined : j(l, e)),
          imageOptions: {
            ...O,
            squareContainer: false,
            width: H,
            height: J
          },
          dark: B,
          onImageContextMenu: t => {
            if ($) {
              t.preventDefault();
              t.stopPropagation();
              if (D != null) {
                D(t, l, e);
              }
            }
          },
          onMouseEnter: t => {
            if (l) {
              if (L != null) {
                L(t, l, e);
              }
            }
          },
          tips: !Z && (l == null ? undefined : l.tips) && (l == null ? undefined : l.tips) !== "" ? l == null ? undefined : l.tips : undefined
        }, `${t}_${l == null ? undefined : l.key}`);
        if (N) {
          return N({
            src: e,
            index: t,
            children: r,
            item: l
          });
        } else {
          return r;
        }
      }
    });
  });
  require.d(exports, {
    ImageListGrid: function () {
      return _;
    }
  });
}