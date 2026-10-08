// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'r' to 'threadShareButtonComponent'
// - Resolved require(847218) to 'thread-share-button-component'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'a' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 's' to 'horizontalDotsIcon'
// - Resolved require(743464) to 'horizontal-dots-icon'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'V' to 'HorizontalDotsIcon' (module 743464)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'K' to 'ThreadShareButton' (module 847218)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 734678
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var threadShareButtonComponent = require("thread-share-button-component") /*id: 847218*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "icon",
          size: "lg",
          className: "text-(--dbx-text-primary)",
          children: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {})
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        container: document.body,
        children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          children: t
        })
      })]
    });
  };
  let d = () => {
    let e = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let t = location.pathname.includes("/chat/new-doc");
    let n = reactJsxRuntimeCoreReexport.jsx(threadShareButtonComponent.ThreadShareButton, {
      tooltipProps: e ? undefined : {
        position: "bottom"
      },
      alwaysVisible: t,
      isExpand: e
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e ? reactJsxRuntimeCoreReexport.jsx(c, {
        children: n
      }) : n
    });
  };
  class u {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ThreadShareIconButtonPlugin: function () {
      return u;
    }
  });
}