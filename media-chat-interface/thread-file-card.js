// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'ThreadFileCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 94978
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  function h() {
    return chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    });
  }
  var p = require.p + "static/image/error-light.78a021c0.png";
  var f = require.p + "static/image/error-dark.59439104.png";
  var g = {
    card: "card-tVgn4t",
    "card-failed": "card-failed-ONgbvv",
    cardFailed: "card-failed-ONgbvv",
    "card-content": "card-content-G6qd6a",
    cardContent: "card-content-G6qd6a",
    "card-content-icon": "card-content-icon-RnBJBA",
    cardContentIcon: "card-content-icon-RnBJBA",
    "card-content-info": "card-content-info-f_4q8K",
    cardContentInfo: "card-content-info-f_4q8K",
    "card-content-info-title": "card-content-info-title-r_dLEL",
    cardContentInfoTitle: "card-content-info-title-r_dLEL",
    "card-content-info-title-text": "card-content-info-title-text-nqRbUZ",
    cardContentInfoTitleText: "card-content-info-title-text-nqRbUZ",
    "card-content-info-title-version": "card-content-info-title-version-mZOKcu",
    cardContentInfoTitleVersion: "card-content-info-title-version-mZOKcu",
    grid: "grid-eJOgmh",
    "svg-old-version": "svg-old-version-qZfMGj",
    svgOldVersion: "svg-old-version-qZfMGj",
    failed: "failed-rBwgFV",
    snapshot: "snapshot-SRZdAh",
    "hide-border": "hide-border-Vjd354",
    hideBorder: "hide-border-Vjd354",
    "error-image": "error-image-iaIHcJ",
    errorImage: "error-image-iaIHcJ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      src: t,
      isFailed: n,
      hideImageBorder: r = false
    } = e;
    let i = h();
    let s = functionInvoker.invoke(() => i ? f : p);
    let c = n || r;
    let u = () => {
      let e = o("w-full h-full", {
        "object-cover select-none bg-s-color-bg-content-base": !r,
        " object-top border-[0.3px] border-solid border-s-color-border-tertiary rounded-s-radius-xxss": !c,
        "!bg-inherit": n && !r
      });
      if (typeof t == "string") {
        return reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(n ? s : t, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xwd*$IWmtl$E-zWTIwNWEy%lh%akJN$jA1b1kyM$Jkb*t5T1hSalJ6bDFXb*MxT%$3elFub*lNbEl4$1RO%mR*a3lSbmxh%XpsNlltM%dkMk15-%haa1F6RnFZakkxT%ZwWE5%Qk1ibEo2Wl$kR2$Wb3pWbm89"
          }),
          alt: "Asset cover",
          className: e
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: e,
          children: t
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(g.snapshot, "card-snapshot", {
          [g["hide-border"]]: c
        }),
        children: u()
      }), n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(g["error-image"]),
        children: u()
      })]
    });
  };
  let b = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "blink-GKdBV1",
      children: t
    });
  };
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var w = {
    sub: "sub-Pl6wEY",
    failed: "failed-c3IzEI",
    "failed-text": "failed-text-oHEXnj",
    "failed-icon": "failed-icon-xSSZZr"
  };
  let x = e => {
    let {
      isFailed: t,
      subTitle: n
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: w.failed,
        children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: w["failed-icon"]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: w["failed-text"],
          children: n
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: w.sub,
        children: n
      });
    }
  };
  let C = e => {
    let {
      className: t,
      style: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("container-UtJ0Ky", t),
      style: n
    });
  };
  var controlBarActionListComponent = require("control-bar-action-list-component") /*id: 716645*/;
  let S = e => {
    let {
      classname: t,
      controlBarActions: n = []
    } = e;
    if (!n.length) {
      return null;
    }
    let r = n.length === 1;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("container-Cz1Pwg", t, {
          "single-action-e0OHsc": r
        }),
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          newIcon: true,
          iconSize: "small",
          iconColor: "deep-grey",
          spacing: "larger",
          items: n
        })
      })
    });
  };
  let k = e => {
    let {
      classname: t
    } = e;
    let n = h();
    let r = functionInvoker.invoke(() => n ? "data:image/png;base64,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" : "data:image/png;base64,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");
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(r, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xwd*$IWmtl$E-zWTIwNWEy%lh%akJN$jA1b1kyM$Jkb*t5T1hSalJ6bDFXb*MxT%$3e$NtaFpNblJ1WTIwN%1XSnR$WFJhTTBwd1drTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
        }),
        alt: "Asset cover",
        className: o("object-top object-cover select-none bg-s-color-bg-content-base", "w-full h-full", "grid-hakDVK", t)
      })
    });
  };
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  let T = e => {
    let {
      disabled: t,
      cardTitle: n,
      subTitle: i,
      version: s,
      status: a,
      cardIcon: c,
      cardImage: u,
      controlBarActions: d,
      latestCardVersion: h,
      titleSkeleton: p = false,
      onClick: f,
      onDisabledClick: y,
      onHoverDisactive: w,
      onHoverActive: E,
      hideImageBorder: T,
      ...O
    } = e;
    let [R, $] = reactCoreLibraryReexport.useState(false);
    let M = a === threadFileStatusEnum.ThreadFileStatus.Generating;
    let j = a === threadFileStatusEnum.ThreadFileStatus.Error;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...O,
      className: o(g.card, {
        [g["card-failed"]]: j
      }),
      onClick: () => {
        if (t || j) {
          if (y != null) {
            y();
          }
          return;
        }
        if (f != null) {
          f();
        }
      },
      onMouseEnter: () => {
        $(true);
        if (E != null) {
          E();
        }
      },
      onMouseLeave: () => {
        $(false);
        if (w != null) {
          w();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx(k, {
        classname: g.grid
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: g["card-content"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(g["card-content-icon"], {
            [g["svg-old-version"]]: !h,
            [g.failed]: j
          }),
          children: c
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(g["card-content-info"]),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o(g["card-content-info-title"]),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: o(g["card-content-info-title-text"], {
                [g.failed]: j
              }),
              children: M ? n ? reactJsxRuntimeCoreReexport.jsx(b, {
                children: n
              }) : p ? reactJsxRuntimeCoreReexport.jsx(C, {}) : undefined : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
                children: n
              })
            }), s && reactJsxRuntimeCoreReexport.jsx("div", {
              className: o(g["card-content-info-title-version"], {
                [g.failed]: j
              }),
              children: s
            })]
          }), i && reactJsxRuntimeCoreReexport.jsx(x, {
            subTitle: i,
            isFailed: j
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(v, {
        hideImageBorder: T,
        src: xssContentSanitizer.sanitizeUrl(u, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xwd*$IWmtl$E-zWTIwNWEy%lh%akJN$jA1b1kyM$Jkb*t5T1hSalJ6bDFXb*MxT%$3elFub*lNbEl4$1RO%mR*a3lSbmxh%XpscFlWZ*pkRmt5%m5s-$F6$XdZek5v-%dOdFpERmpkejA5"
        }),
        isFailed: j
      }), !M && R && reactJsxRuntimeCoreReexport.jsx(S, {
        classname: "right-16 bottom-16",
        controlBarActions: d
      })]
    });
  };
  var O = {
    card: "card-pY8twi",
    checked: "checked-sTTsfn",
    "card-icon": "card-icon-o1hnAV",
    "card-content": "card-content-RRZYgE",
    "card-title": "card-title-H_lnuj",
    "card-title-text": "card-title-text-ehySI8",
    "card-title-version": "card-title-version-AQx7wV",
    actionBar: "actionBar-puc8zr",
    background: "background-QlBsW3",
    "background-old": "background-old-LoH9og",
    "background-failed": "background-failed-Z0Zt4Z",
    grid: "grid-Z_ECSX",
    "old-version": "old-version-oNrnle",
    failed: "failed-Z7dbwD"
  };
  let R = e => {
    let {
      className: t,
      cardTitle: n,
      cardIcon: i,
      checked: s,
      subTitle: a,
      version: l,
      status: c,
      disabled: u,
      latestCardVersion: d,
      controlBarActions: h,
      titleSkeleton: p = false,
      onClick: f,
      onDisabledClick: g,
      onHoverDisactive: v,
      onHoverActive: y,
      ...w
    } = e;
    let [E, T] = reactCoreLibraryReexport.useState(false);
    let R = c === threadFileStatusEnum.ThreadFileStatus.Generating;
    let $ = c === threadFileStatusEnum.ThreadFileStatus.Error;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...w,
      className: o(O.card, t, {
        [O.checked]: s
      }),
      onClick: () => {
        if (u || $) {
          if (g != null) {
            g();
          }
          return;
        }
        if (f != null) {
          f();
        }
      },
      onMouseEnter: () => {
        T(true);
        if (y != null) {
          y();
        }
      },
      onMouseLeave: () => {
        T(false);
        if (v != null) {
          v();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx(k, {
        classname: O.grid
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(O.background, {
          [O["background-failed"]]: $,
          [O["background-old"]]: !d
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(O["card-icon"], {
          [O["old-version"]]: !d,
          [O.failed]: $
        }),
        children: i
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(O["card-content"]),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(O["card-title"]),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(O["card-title-text"], {
              "!text-s-color-text-quaternary": $
            }),
            children: R ? n ? reactJsxRuntimeCoreReexport.jsx(b, {
              children: n
            }) : p ? reactJsxRuntimeCoreReexport.jsx(C, {}) : undefined : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: n
            })
          }), l && reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(O["card-title-version"], {
              [O.failed]: $
            }),
            children: l
          })]
        }), a && reactJsxRuntimeCoreReexport.jsx(x, {
          subTitle: a,
          isFailed: $
        })]
      }), !R && E && reactJsxRuntimeCoreReexport.jsx(S, {
        classname: O.actionBar,
        controlBarActions: h
      })]
    });
  };
  let $ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: r,
      showCardImage: i = false,
      i18n: l = {},
      checked: c,
      cardImage: u,
      fallBackCardImage: d,
      hideImageBorder: h = false,
      ...p
    } = e;
    let {
      errorText: f
    } = l;
    let v = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 680
    });
    let b = functionInvoker.invoke(() => ({
      ...p,
      errorText: f
    }));
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      style: r,
      className: o(g.container, n),
      children: v !== "md" && v !== "sm" && i ? reactJsxRuntimeCoreReexport.jsx(T, {
        ...b,
        cardImage: u || d,
        hideImageBorder: h
      }) : reactJsxRuntimeCoreReexport.jsx(R, {
        ...b,
        checked: c
      })
    });
  });
  require.d(exports, {
    ThreadFileCard: function () {
      return $;
    }
  });
}