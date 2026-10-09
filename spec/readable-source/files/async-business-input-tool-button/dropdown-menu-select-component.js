// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'DropdownMenuSelect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 339350
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var chevronDownIcon_1 = require("chevron-down-icon_1") /*id: 24405*/;
  var c = {
    "option-item-v2": "option-item-v2-uhHgtz",
    image: "image-Almzcb",
    text: "text-IE9nNh"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = (e, t, n) => {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex w-full items-center",
      children: (n == null ? undefined : n((e == null ? undefined : e.value) ?? "", (e == null ? undefined : e.label) ?? "")) ?? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [(e == null ? undefined : e.image) ? reactJsxRuntimeCoreReexport.jsx("img", {
          className: c.image,
          src: xssContentSanitizer.sanitizeUrl(e == null ? undefined : e.image, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3elRuSmhWM2h6$EZoT01WbHBN$3Rq-lRsM1dr-z$NMkpwT1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
          })
        }) : e == null ? undefined : e.icon, reactJsxRuntimeCoreReexport.jsx("div", {
          className: c.text,
          children: e == null ? undefined : e.label
        })]
      })
    }, t);
  };
  let p = e => {
    let {
      renderTrigger: t,
      leadingIcon: n,
      value: i,
      onChange: a,
      list: p,
      title: h,
      showLabel: f = true,
      isOverflow: m,
      renderItem: g,
      onOpenChange: v,
      ..._
    } = e;
    let [b, y] = reactCoreLibraryReexport.useState(false);
    let w = e => {
      let {
        list: t = []
      } = e;
      if (t == null) {
        return undefined;
      } else {
        return t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
          "data-testid": "dropdown-menu-item",
          className: o("flex w-full leading-40", f && "h-38 pt-0", c["option-item-v2"]),
          extraInfoDirection: (e == null ? undefined : e.extraInfo) ? "vertical" : "horizontal",
          extraInfo: e == null ? undefined : e.extraInfo,
          active: e.value === i,
          showTick: true,
          onSelect: () => {
            if (a != null) {
              a(e);
            }
          },
          children: d(e, t, g)
        }, t));
      }
    };
    let x = reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuSub, {
      onOpenChange: v,
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DropdownMenuSubTriggerWithVariants, {
        className: "h-38 w-full",
        icon: n,
        children: h
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuSubContent, {
          className: "z-1000",
          ..._,
          children: [f && reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuLabel, {
            children: h ?? ""
          }), w({
            list: p
          })]
        })
      })]
    });
    let C = reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      onOpenChange: e => {
        y(e);
        if (v != null) {
          v(e);
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        className: "hover:cursor-pointer",
        children: t == null ? undefined : t(reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1.ChevronDownIcon, {
          className: `
              !h-10 !w-10 transition-all
              ${b ? "rotate-180" : ""}
            `
        }))
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          align: "start",
          className: "z-1000",
          ..._,
          children: [f && reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuLabel, {
            children: h ?? ""
          }), w({
            list: p
          })]
        })
      })]
    });
    if (m) {
      return x;
    } else {
      return C;
    }
  };
  require.d(exports, {
    DropdownMenuSelect: function () {
      return p;
    }
  });
}