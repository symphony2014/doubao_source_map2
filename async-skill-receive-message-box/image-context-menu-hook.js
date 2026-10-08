// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useImageContextMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 604173
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var contextMenuDropdownHook = require("context-menu-dropdown-hook") /*id: 737677*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var u = "context-menu-item-eNvy2I";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      onImageDownload: t,
      onImageCopy: n,
      t: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "image_context_menu",
      className: "context-menu-LCGr2G",
      onClick: e => e.stopPropagation(),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": "right_click_copy_image",
          className: u,
          onClick: () => {
            n();
          },
          children: [reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {}), i("select_text_copy")]
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": "right_click_download_image",
        className: u,
        onClick: () => {
          if (t != null) {
            t();
          }
        },
        children: [reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {}), i("edit_image_download")]
      })]
    });
  };
  let v = e => {
    let {
      t,
      eventCallbacks: n
    } = e;
    let d = reactCoreLibraryReexport.useRef({
      image: null,
      src: xssContentSanitizer.sanitizeUrl("", null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWIySXlPWEpqZ$RreFl6SlZkR0Z-T$do-%1s$jBX$Ek1ZFdSSFZq%mtRek-w$2xjM%1$eH$$bnBs%jBaN$dqTldlZz09"
      }),
      fileName: ""
    });
    let {
      dropdown: c,
      showContextMenu: u,
      hideContextMenu: v
    } = contextMenuDropdownHook.useContextMenuDropdown({
      dropdownProps: {
        render: reactJsxRuntimeCoreReexport.jsx(p, {
          t: t,
          onImageDownload: () => {
            let {
              image: e,
              src: i,
              fileName: o
            } = d.current;
            if (e) {
              var a;
              let {
                format: l,
                downloadImage: r
              } = imageActionUtils.processImageData(e);
              let d = (r == null ? undefined : r.url) || i || "";
              if (n != null && (a = n.onImageDownload) !== null && a !== undefined) {
                a.call(n, {
                  imageSrc: d,
                  format: l,
                  fileName: o
                });
              }
              imageActionUtils.downloadImage({
                imageSrc: d,
                format: l,
                fileName: o,
                t
              });
            }
            v();
          },
          onImageCopy: () => {
            var e;
            let {
              image: i,
              src: o
            } = d.current;
            if (!i) {
              return;
            }
            let {
              downloadImage: a
            } = imageActionUtils.processImageData(i);
            let c = (a == null ? undefined : a.url) || o || "";
            if (n != null && (e = n.onImageCopy) !== null && e !== undefined) {
              e.call(n);
            }
            imageActionUtils.copyImageToClipboard({
              imageSrc: c
            }).then(() => {
              samanthaToastFactory.defaultToast.success({
                content: t("skill_copliotreading_copy_success"),
                showClose: false,
                theme: "light"
              });
            }).catch(e => {
              samanthaToastFactory.defaultToast.error({
                content: t("flow_web_ext_youtube_share_copy_fail"),
                showClose: false,
                theme: "light"
              });
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "image_skill_copy_image_error",
                error: e instanceof Error ? e : Error("unknown")
              });
            });
            v();
          }
        })
      },
      appendTo: () => document.body
    });
    return {
      contextMenu: c,
      showContextMenu: e => {
        var n;
        let {
          image: i,
          src: o,
          fileName: a,
          pos: l
        } = e;
        d.current = {
          image: i,
          src: o,
          fileName: a
        };
        u(l);
        imageActionUtils.preloadImage(i && ((n = imageActionUtils.processImageData(i)) === null || n === undefined ? undefined : n.downloadImage?.url));
      },
      hideContextMenu: v
    };
  };
  require.d(exports, {
    useImageContextMenu: function () {
      return v;
    }
  });
}