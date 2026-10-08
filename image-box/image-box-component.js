// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1979.d5697881.js
         * chunkId: 1979
         * moduleId: 332667
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var t = classnamesUtils;
  var o = {
    placeholder: "placeholder-HFmiPM",
    img: "img-P5_zvq",
    animation: "animation-LQqEOD"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      src: r,
      onClick: a,
      className: l,
      skeleton: d = true,
      animation: n = false,
      onLoaded: u
    } = e;
    let [c, $] = reactCoreLibraryReexport.useState(!d);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        style: {
          display: c ? undefined : "none"
        },
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1dwaFIwWXd%RmRhZDFs$E9-c*pi$TEy$1RJNWRHTkhPWFZh$np$d1RESnNkRmx-Wkd4T$d*Wnd%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
        }),
        className: t(l, o.img, n ? o.animation : ""),
        onLoad: e => {
          e.target.setAttribute("data-loaded", "true");
          $(true);
          if (u != null) {
            u(e.target);
          }
        },
        onClick: a
      }), c && r ? null : reactJsxRuntimeCoreReexport.jsx("span", {
        className: t(l, o.placeholder, "image-placeholder")
      })]
    });
  };
  var n = {
    "image-box": "image-box-GUng44",
    imageBox: "image-box-GUng44",
    image: "image-FXN3B9",
    "large-image-box": "large-image-box-oujZLs",
    largeImageBox: "large-image-box-oujZLs",
    "three-image-box": "three-image-box-ALc2IC",
    threeImageBox: "three-image-box-ALc2IC",
    "four-image-box": "four-image-box-TXKloV",
    fourImageBox: "four-image-box-TXKloV",
    "normal-image-box": "normal-image-box-j2_R0P",
    normalImageBox: "normal-image-box-j2_R0P",
    "rest-count": "rest-count-xTjW3t",
    restCount: "rest-count-xTjW3t",
    "tl-radius": "tl-radius-g9YYdV",
    tlRadius: "tl-radius-g9YYdV",
    "tr-radius": "tr-radius-KDGxJz",
    trRadius: "tr-radius-KDGxJz",
    "bl-radius": "bl-radius-GiQVOr",
    blRadius: "bl-radius-GiQVOr",
    "br-radius": "br-radius-V0dOtN",
    brRadius: "br-radius-V0dOtN"
  };
  let u = e => {
    let {
      images: r = [],
      className: a,
      onClick: l
    } = e;
    let [o, u] = reactCoreLibraryReexport.useState([]);
    let c = reactCoreLibraryReexport.useMemo(() => r.length === 1 ? "large-image-box" : r.length < 4 ? "three-image-box" : r.length === 4 ? "four-image-box" : "normal-image-box", [r]);
    let $ = () => {
      let {
        length: e
      } = r.slice(0, 6);
      let a = [];
      if (e === 6) {
        a.push("tl-radius", "", "tr-radius", "bl-radius", "", "br-radius");
      } else if (e === 5) {
        a.push("tl-radius", "", "tr-radius", "bl-radius", "br-radius");
      } else if (e === 4) {
        a.push("tl-radius", "tr-radius", "bl-radius", "br-radius");
      } else if (e === 3) {
        a.push("tl-radius bl-radius", "", "tr-radius br-radius");
      } else if (e === 2) {
        a.push("tl-radius bl-radius", "tr-radius br-radius");
      }
      u(a);
    };
    reactCoreLibraryReexport.useEffect(() => {
      $();
    }, [r]);
    let b = e => {
      var r;
      let a = (r = o[e]) === null || r === undefined ? undefined : r.split(" ");
      if (a == null) {
        return undefined;
      } else {
        return a.map(e => n[e]);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: t(n["image-box"], a),
      onClick: l,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: n[c],
        children: r.slice(0, 6).map((e, r) => reactJsxRuntimeCoreReexport.jsx(d, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1dwaFIwWXd%RmRhZDFs$E9-c*pi$TEy$1cxc05reFh%blpp$0$KMlltM$dk$1JET1hOa%1rNW9Za2Q0-0ZwdFZ-%mhWekZv$2pK$mR*bHRP$FJNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
          }),
          className: t(n.image, b(r)),
          skeleton: true
        }, r))
      }), r.length > 6 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: n["rest-count"],
        children: reactJsxRuntimeCoreReexport.jsxs("span", {
          children: ["+", r.length - 6]
        })
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    ImageBox: function () {
      return u;
    }
  });
}