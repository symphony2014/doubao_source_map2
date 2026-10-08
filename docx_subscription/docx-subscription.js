// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'g' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 'u' to 'storeActionConstants'
// - Resolved require(119654) to 'store-action-constants'
// - Renamed variable 'n' to 'docxSubscriptionVisibility'
// - Resolved require(210843) to 'docx-subscription-visibility'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'D' to 'docTokenHelperUtils'
// - Resolved require(740758) to 'doc-token-helper-utils'
// - Renamed variable 'r' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'L' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'l' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'z' to 'themeColorConstants'
// - Resolved require(477577) to 'theme-color-constants'
// - Renamed variable 'y' to 'styledComponentsCore'
// - Resolved require(842965) to 'styled-components-core'
// - Renamed variable 'T' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'C' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'b' to 'docxHistoryHeaderComponent'
// - Resolved require(539080) to 'docx-history-header-component'
// - Renamed variable 'Y' to 'loadingIndicatorService'
// - Resolved require(809257) to 'loading-indicator-service'
// - Renamed variable 'U' to 'docxClientVarsService'
// - Resolved require(595324) to 'docx-client-vars-service'
// - Renamed variable 'Z' to 'documentHistoryService'
// - Resolved require(837313) to 'document-history-service'
// - Renamed variable 'G' to 'docHistoryFetchService'
// - Resolved require(273692) to 'doc-history-fetch-service'
// - Renamed variable 'B' to 'docxHistoryEditor'
// - Resolved require(136181) to 'docx-history-editor'
// - Renamed variable 'J' to 'docxEventCollectorWrapper'
// - Resolved require(954913) to 'docx-event-collector-wrapper'
// - Renamed variable 'H' to 'docxVersionDataManager'
// - Resolved require(667955) to 'docx-version-data-manager'
// - Renamed variable 'V' to 'docxEditorEventConstantsAndManager_1'
// - Resolved require(851701) to 'docx-editor-event-constants-and-manager_1'
// - Renamed variable 'X' to 'docxExternalHistoryHandler'
// - Resolved require(234536) to 'docx-external-history-handler'
// - Renamed variable 'F' to 'userColorConfigManager'
// - Resolved require(155242) to 'user-color-config-manager'
// - Renamed variable 'q' to 'docLaunchChangeUtils'
// - Resolved require(395613) to 'doc-launch-change-utils'
// - Updated imported property 'U' to 'actionTypes' (module 119654)
// - Updated imported property 'xA' to 'colorDark' (module 477577)
// - Updated imported property 'Mx' to 'colorLightGray' (module 477577)
// - Updated imported property 'mg' to 'colorMediumGray' (module 477577)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'h' to 'DocxHistoryHeader' (module 539080)
// - Updated imported property 'v' to 'isSubscriptionShow' (module 210843)
// - Updated imported property 'Zk' to 'hideLoading' (module 809257)
// - Updated imported property 'QP' to 'showLoading' (module 809257)
// - Updated imported property 'jL' to 'splitVersionRanges' (module 837313)
// - Updated imported property 'nP' to 'mergeHistoryChanges' (module 837313)
// - Updated imported property 'bl' to 'docxApiService' (module 595324)
// - Updated imported property 'Q5' to 'processHistoryData' (module 273692)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'w' to 'DocxExternalHistory' (module 234536)
// - Updated imported property 'F' to 'wrapEventCollector' (module 954913)
// - Updated imported property 'n' to 'userConfigManager' (module 155242)
// - Updated imported property 'p' to 'docxVersionManager' (module 667955)
// - Updated imported property 'ae' to 'globalEventEmitter' (module 851701)
// - Updated imported property 'nM' to 'externalHistoryEventConstants' (module 851701)
// - Updated imported property 'V' to 'HistoryEditor' (module 136181)
// - Updated imported property 'LP' to 'resolveDocToken' (module 740758)
// - Updated imported property 'YO' to 'normalizeVersions' (module 395613)
// - Updated imported property 'dW' to 'formatChangeBlocks' (module 395613)
// - Updated imported property 'vl' to 'parseChangesQuery' (module 395613)
// - Updated imported property 'hw' to 'fetchDocChanges' (module 395613)
// - Updated imported property 'Gw' to 'cleanSearchParam' (module 395613)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_subscription.c03b3ac1.js
         * chunkId: 57755
         * moduleId: 560737
         */
module.exports = function (module, exports, require) {
  var I;
  var N;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function c() {
    return {
      type: storeActionConstants.actionTypes.showSubscription
    };
  }
  function j() {
    return {
      type: storeActionConstants.actionTypes.hideSubscription
    };
  }
  var docxSubscriptionVisibility = require("docx-subscription-visibility") /*id: 210843*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  (I = {}).LOADING = "LOADING";
  I.FAILED = "FAILED";
  I.NORMAL = "NORMAL";
  I.DENIED = "DENIED";
  let s = I;
  let o = "docx-subscription-loading";
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var themeColorConstants = require("theme-color-constants") /*id: 477577*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let A = styledComponentsCore.default.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  let S = styledComponentsCore.default("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIxIiBoZWlnaHQ9IjEyMSIgdmlld0JveD0iMCAwIDEyMSAxMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IG9wYWNpdHk9IjAuMDEiIHg9IjcuNTg4ODciIHk9IjguNDkwMjMiIHdpZHRoPSIxMTIuNSIgaGVpZ2h0PSIxMTIuNSIgZmlsbD0iI0Q4RDhEOCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjAzNDIgOTkuNDY4NEgxMDAuNTIzVjI1LjEyMDZIMTAuMDM0MlY5OS40Njg0WiIgZmlsbD0iI0Q2REFFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg4LjI5NSA0NC4xNzhMODAuMzAzNCA5NS41NTU2TDE3LjM3MTEgODUuNzkyNkwyNS4zNjI3IDM0LjQxNDNMODguMjk1IDQ0LjE3OFoiIGZpbGw9IiNGNEY1RjkiLz4KPHBhdGggZD0iTTMxLjA2NjQgODAuMzkyNEwzNS40Njg2IDQzLjIxODUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC43NjMzNTkiLz4KPHBhdGggZD0iTTM3LjQyNTggODEuMzcwN0w0MS44MjggNDQuMTk2OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjc2MzM1OSIvPgo8cGF0aCBkPSJNMTAwLjAzNSA2MC4zMzgxQzEwMC4wMzUgNTIuNTA0MSA5My42ODM5IDQ2LjE1MzMgODUuODQ5OCA0Ni4xNTMzQzc4LjAxNTggNDYuMTUzMyA3MS42NjUgNTIuNTA0MSA3MS42NjUgNjAuMzM4MSIgc3Ryb2tlPSIjMTgyNjNDIiBzdHJva2Utd2lkdGg9IjEuNTI2NzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSI2MC45MDMzIiB5PSI2MC4zMzgxIiB3aWR0aD0iNDkuODkxMyIgaGVpZ2h0PSI0OS44OTEzIiBmaWxsPSIjRkZDMjAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTgwNyAyNS42NzQySDM3LjMyODhWMTMuNDU2M0gxMC4xODA3VjI1LjY3NDJaIiBmaWxsPSIjQjVCRUM4Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODcuODA2NCA4Ny45MTE3QzkwLjM2MDkgODcuMDg2NSA5Mi4yMDg2IDg0LjY4ODggOTIuMjA4NiA4MS44NTk3QzkyLjIwODYgNzguMzQ3OSA4OS4zNjE3IDc1LjUwMSA4NS44NDk5IDc1LjUwMUM4Mi4zMzgxIDc1LjUwMSA3OS40OTEyIDc4LjM0NzkgNzkuNDkxMiA4MS44NTk3Qzc5LjQ5MTIgODQuNjg4OCA4MS4zMzg5IDg3LjA4NjUgODMuODkzNCA4Ny45MTE3Vjk2Ljc0ODVDODMuODkzNCA5Ny4xNzAxIDg0LjIzNTEgOTcuNTExOCA4NC42NTY3IDk3LjUxMThIODcuMDQzMUM4Ny40NjQ3IDk3LjUxMTggODcuODA2NCA5Ny4xNzAxIDg3LjgwNjQgOTYuNzQ4NVY4Ny45MTE3WiIgZmlsbD0iIzE4MjYzQyIvPgo8L3N2Zz4K")`
  height: 120px;
  height: 140px;
`;
  let d = styledComponentsCore.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${themeColorConstants.colorDark};
  line-height: 38px;
`;
  let x = styledComponentsCore.default.div`
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 16px;
  color: ${themeColorConstants.colorLightGray};
  text-align: center;
`;
  var O = () => reactJsxRuntimeCoreReexport.jsxs(A, {
    children: [reactJsxRuntimeCoreReexport.jsx(S, {}), reactJsxRuntimeCoreReexport.jsx(d, {
      children: t("subscribe.denied_to_access_title")
    }), reactJsxRuntimeCoreReexport.jsx(x, {
      children: t("subscribe.denied_to_access_detail")
    })]
  });
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  let E = styledComponentsCore.default("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjIgMTM4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICA8cGF0aCBmaWxsPSIjMTgyNjNDIiBkPSJNNzYuMjMzIDUzLjE1N2wtMi45OTcgMTIuMDMxLTQ1LjU1OSAxNS4wMzlzLTIuMzk4LTEwLjgyOCAxOS43ODItMjQuMDYyYzguNDUxLTUuMDQyIDMuNDUzLTcuNjg3IDEuNzk4LTkuNjI1LTMuNTk3LTQuMjEgMS4yLTcuMjE4IDguMzkyLTEwLjIyNiA3LjE3OC0zIDAtNi4wMTUtMS4xOTgtMTEuNzMtMS4yLTUuNzE0IDkuNTktMTkuNTUgMjIuNzgtMjIuNTU3QzkyLjQxNy0uOTgxIDExMi41NTIuMzk1IDEwOS44MDEgMjIuNDc5Yy0uNiA0LjgxMy0xLjE5OSA4LjQyMi0xLjE5OSA4LjQyMnMtMS4xOTgtNC4yMTEtNS45OTQtMi40MDdjLTMuODgyIDEuNDYtMS43OTkgNC4yMTEtNy4xOTMgMC00Ljc5Ni0yLjQwNi0xMC43OS03LjgyLTEwLjE5MS0xNS4wMzgtMy41OTggNS40MTQtNi41OTQgMTAuODI4LTEzLjc4OCAxMy4yMzQtMS43OTkgMjEuNjU1IDQuNzk2IDI2LjQ2NyA0Ljc5NiAyNi40NjciPjwvcGF0aD4KICAgICAgPHBhdGggc3Ryb2tlPSIjMTgyNjNDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zOTEiIGQ9Ik05OC40MTMgMzguNzJzMTAuMTktLjYwMSA5LjU5LTcuMjE3Yy0uNTk5LTYuNjE4LTguMzkyLS42MDItOC4zOTItLjYwMk03MS40MzcgMjYuMDg5cy0yLjYwNyAyOC40OTggMTAuMTkgMjguODczIj48L3BhdGg+CiAgICAgIDxwYXRoIHN0cm9rZT0iIzE4MjYzQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzkxIiBkPSJNMjguMjc2IDc5LjYyNWw0NC45Ni0xNC40MzcgMi45OTYtMTEuNDI5TTUzLjI0NyA3Ny4xMTdzOC4wNTYgMjguMDU3IDM0LjEyIDIwLjQ0OGMyNi4wNjUtNy42MDggMjEuMzI2LTM4Ljk5NCAyMS4zMjYtMzguOTk0TTg1LjIyNSAxMi44NTVjLTEuMTk5LjYwMS0yLjk5NyAxMC4yMjYtMTcuMzg0IDE1LjAzOE05OS4wMTIgMzAuOXMtMTEuMzktNS40MTQtMTIuNTg5LTEyLjYzMiI+PC9wYXRoPgogICAgICA8cGF0aCBmaWxsPSIjMTgyNjNDIiBkPSJNNzguNzU1IDM1LjIzNmEyLjE3NCAyLjE3NCAwIDAgMS0zLjA4MyAwIDIuMTk0IDIuMTk0IDAgMCAxIDAtMy4wOTQgMi4xNzYgMi4xNzYgMCAwIDEgMy4wODMgMGMuODUxLjg1NS44NTEgMi4yNCAwIDMuMDk0TTkyLjAzNyAzNC43MjlhMi4xODQgMi4xODQgMCAwIDEtMi4xOCAyLjE4NyAyLjE4MyAyLjE4MyAwIDAgMS0yLjE4LTIuMTg3YzAtMS4yMDkuOTc2LTIuMTg3IDIuMTgtMi4xODcgMS4yMDMgMCAyLjE4Ljk3OCAyLjE4IDIuMTg3Ij48L3BhdGg+CiAgICAgIDxwYXRoIHN0cm9rZT0iIzE4MjYzQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzkxIiBkPSJNODIuODI3IDQ1LjkzOWwtMy41OTcuNjAyIDIuOTk3LTEzLjIzNSI+PC9wYXRoPgogICAgICA8cGF0aCBmaWxsPSIjMTgyNjNDIiBkPSJNMTA3LjQwNCAzNC41MWwtMi45OTcgMTkuMjUtMTEuMzkgNC4yMXYtNy44MnM0Ljc5Ni04LjQyMSA1LjM5Ni0xMC44MjhjMCAwIDMuMjEyLS44MzcgNC4xOTYtMS4yMDMgMS4yOTYtLjQ4IDQuNzk1LTMuNjEgNC43OTUtMy42MSI+PC9wYXRoPgogICAgICA8cGF0aCBmaWxsPSIjRDZEQUUxIiBkPSJNMTkuNjM4IDEzNy4wMjZoMTIyLjc4OFY0OS4xOTVIMTkuNjM4eiI+PC9wYXRoPgogICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS4zOTEiIGQ9Ik04MC4wODggNDguMTM3TDc0LjQyIDkyLjU4aDExLjMzNGwtNi42MTIgNDQuNDQ1Ij48L3BhdGg+CiAgICAgIDxwYXRoIGZpbGw9IiNGRkMyMDAiIGQ9Ik0xMjYuNDYzIDQ5LjAxNWgxNS43ODd2LTcuOTJoLTE1Ljc4N3oiPjwvcGF0aD4KICAgICAgPHBhdGggc3Ryb2tlPSIjMTgyNjNDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zOTEiIGQ9Ik0yLjA2MyA3My45NjNzLS4xMSAwIDkuODU3LS44MzNjOS45NjktLjgzNCAyMi40MjktMTYuNjcyIDI4LjI0NC0xNS44MzggNS44MTQuODMzLTguMzA4IDEyLjUwNC0zLjMyMyAxOC4zMzggNS41NjYgNi41MTYgMzIuMzk2LTEuNjY3IDMxLjU2NiA1LjgzNi0uODMxIDcuNTAxLTMwLjczNSAxMC4wMDItMzEuNTY2IDUuODM1LS44My00LjE2OSAzNS43MiAwIDM1LjcyIDcuNTAycy0zNS43MiA2LjY2OC0zNi41NSAzLjMzNGMtLjgzMi0zLjMzNCAzMS41NjUuODMzIDMxLjU2NSA3LjUwMiAwIDYuNjY4LTMzLjIyNyA2LjY2OC0zNC4wNTggMy4zMzQtLjgzLTMuMzM0IDI5LjEyIDIuMjY4IDI4LjI0MyA2LjY2OC0xLjY2MSA4LjMzNi02MC41MyA1LjAwMi02MC41MyA1LjAwMk0xNTkuODE1IDczLjk2M3MuMTEgMC05Ljg1OC0uODMzYy05Ljk2OC0uODM0LTIyLjQyOC0xNi42NzItMjguMjQzLTE1LjgzOC01LjgxNC44MzMgOC4zMDggMTIuNTA0IDMuMzIzIDE4LjMzOC01LjU2NiA2LjUxNi0zMi4zOTctMS42NjctMzEuNTY2IDUuODM2LjgzIDcuNTAxIDMwLjczNSAxMC4wMDIgMzEuNTY2IDUuODM1LjgzLTQuMTY5LTM1LjcyIDAtMzUuNzIgNy41MDJzMzUuNzIgNi42NjggMzYuNTUgMy4zMzRjLjgzMi0zLjMzNC0zMS41NjYuODMzLTMxLjU2NiA3LjUwMiAwIDYuNjY4IDMzLjIyOCA2LjY2OCAzNC4wNiAzLjMzNC44My0zLjMzNC0yOS4xMjIgMi4yNjgtMjguMjQ0IDYuNjY4IDEuNjYgOC4zMzYgNjAuNTI4IDUuMDAyIDYwLjUyOCA1LjAwMiI+PC9wYXRoPgogIDwvZz4KPC9zdmc+Cg==")`
  width: 140px;
`;
  let k = styledComponentsCore.default.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  let h = styledComponentsCore.default.div`
  color: ${themeColorConstants.colorMediumGray};
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
`;
  let w = styledComponentsCore.default.div`
  margin-top: 24px;
`;
  var m = M => {
    let {
      reload: e
    } = M;
    return reactJsxRuntimeCoreReexport.jsxs(k, {
      children: [reactJsxRuntimeCoreReexport.jsx(E, {}), reactJsxRuntimeCoreReexport.jsx(h, {
        children: t("feed.load_failed")
      }), reactJsxRuntimeCoreReexport.jsx(w, {
        children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          onClick: e,
          type: "primary",
          size: "small",
          children: t("history.reload")
        })
      })]
    });
  };
  var docxHistoryHeaderComponent = require("docx-history-header-component") /*id: 539080*/;
  class f extends docxHistoryHeaderComponent.DocxHistoryHeader {
    hideHistory() {
      this.props.hideSubscription();
    }
    renderRecover() {
      let {
        title: M
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "header-item recover docx-subscription",
        children: `${t("subscribe.latest_modify_time")} ${M}`
      });
    }
  }
  var p = reactReduxCore.connect(M => ({
    isShow: docxSubscriptionVisibility.isSubscriptionShow(M)
  }), {
    showSubscription: c,
    hideSubscription: j
  })(f);
  var loadingIndicatorService = require("loading-indicator-service") /*id: 809257*/;
  let v = () => {
    loadingIndicatorService.hideLoading(o);
  };
  var Q = M => {
    let {
      wrapper: e
    } = M;
    reactCoreLibraryReexport.useEffect(() => {
      loadingIndicatorService.showLoading(e, o);
      return () => {
        v();
      };
    }, [e]);
    return null;
  };
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  var documentHistoryService = require("document-history-service") /*id: 837313*/;
  var docHistoryFetchService = require("doc-history-fetch-service") /*id: 273692*/;
  (N = P || {})[N.PERMISSION_DENIED = 225564030] = "PERMISSION_DENIED";
  var P = N;
  let R = async (M, e, i) => {
    let I = documentHistoryService.splitVersionRanges(e, i).map(e => {
      let [i, I] = e;
      return docxClientVarsService.docxApiService.fetchSubscriptionChangeset(M, i, I);
    });
    let N = await Promise.all(I);
    return documentHistoryService.mergeHistoryChanges(N);
  };
  let _ = async (M, e) => await docxClientVarsService.docxApiService.fetchSubscriptionSnapshot(M, e);
  let W = (M, e) => {
    let [i, I] = reactCoreLibraryReexport.useState(s.LOADING);
    let [N, g] = reactCoreLibraryReexport.useState(null);
    let [u, c] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        (async () => {
          let {
            version: [i, N]
          } = e;
          I(s.LOADING);
          try {
            let e = R(M, i, N);
            let u = _(M, i);
            let c = await e;
            let j = await u;
            let n = {
              data: JSON.parse(j.data.snapshot.content)
            };
            let {
              clientVar: a,
              historyChangeDetail: D
            } = docHistoryFetchService.processHistoryData(n, c, true, ["folded"]);
            let {
              users: r
            } = c.data;
            g({
              clientVar: a,
              historyChangeDetail: D,
              users: r
            });
            I(s.NORMAL);
          } catch (M) {
            docxEventCollector.wrappedCollector("doc_bug_track_dev", {
              action: "docx_subscription",
              info: {
                error: JSON.stringify(M),
                stage: "fetch_client_vars"
              }
            });
            if ((M == null ? undefined : M.code) === P.PERMISSION_DENIED) {
              I(s.DENIED);
            } else {
              I(s.FAILED);
            }
          }
        })();
      }
    }, [e, M, u]);
    return {
      status: i,
      clientVarsInfo: N,
      reload: reactCoreLibraryReexport.useCallback(() => {
        c(M => !M);
      }, [])
    };
  };
  var docxHistoryEditor = require("docx-history-editor") /*id: 136181*/;
  var docxEventCollectorWrapper = require("docx-event-collector-wrapper") /*id: 954913*/;
  var docxVersionDataManager = require("docx-version-data-manager") /*id: 667955*/;
  var docxEditorEventConstantsAndManager_1 = require("docx-editor-event-constants-and-manager_1") /*id: 851701*/;
  var docxExternalHistoryHandler = require("docx-external-history-handler") /*id: 234536*/;
  var userColorConfigManager = require("user-color-config-manager") /*id: 155242*/;
  let {
    showDate: K
  } = platformDocUtils.YM_;
  var $ = M => {
    let e;
    let {
      token: i,
      change: I,
      context: N,
      copyable: g,
      onMount: u
    } = M;
    let [c, j] = reactCoreLibraryReexport.useState(-1);
    let [n, D] = reactCoreLibraryReexport.useState(0);
    let [r, o] = reactCoreLibraryReexport.useState([]);
    let L = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef(new docxExternalHistoryHandler.DocxExternalHistory());
    let z = reactCoreLibraryReexport.useCallback(M => {
      j(M);
    }, []);
    let y = reactCoreLibraryReexport.useCallback(() => {
      z(0);
      if (u != null) {
        u();
      }
    }, [z, u]);
    let {
      status: A,
      clientVarsInfo: S,
      reload: d
    } = W(i, I);
    let x = reactCoreLibraryReexport.useCallback(M => {
      let {
        changes: e
      } = M;
      let i = e.length;
      if (i === 0) {
        docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
          click: "subscribe_history_no_change"
        });
      }
      D(i);
      o(r);
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!N || !S) {
        return;
      }
      let {
        externalBlockInfo: M
      } = N;
      userColorConfigManager.userConfigManager.setUsersConfig(S.users);
      if (M) {
        docxVersionDataManager.docxVersionManager.generateVersionData(M, true);
      }
      return () => {
        if (M) {
          docxVersionDataManager.docxVersionManager.resetData();
        }
      };
    }, [N, S, N == null ? undefined : N.externalBlockInfo]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!N || !S) {
        return;
      }
      let {
        externalBlockInfo: M
      } = N;
      let {
        clientVar: e,
        historyChangeDetail: i
      } = S;
      if (M && i && e) {
        l.current.injectOptions({
          externalBlockInfo: M,
          changeDetails: i,
          isShowDiff: true
        });
        return () => {
          l.current.destroy();
        };
      }
    }, [N, S, N == null ? undefined : N.externalBlockInfo, S == null ? undefined : S.historyChangeDetail]);
    reactCoreLibraryReexport.useEffect(() => {
      docxEditorEventConstantsAndManager_1.globalEventEmitter.on(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_ALL_READY, x);
      return () => {
        docxEditorEventConstantsAndManager_1.globalEventEmitter.off(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_ALL_READY, x);
      };
    }, [x]);
    let C = {
      title: typeof (N == null ? undefined : N.timestamp) == "number" ? K(N.timestamp) : null,
      historyItem: null,
      isShowDiff: true,
      diffCount: n,
      diffIndex: c,
      token: i,
      onDiffIndexChange: z
    };
    switch (A) {
      case s.LOADING:
        e = reactJsxRuntimeCoreReexport.jsx(Q, {
          wrapper: L.current
        });
        break;
      case s.FAILED:
        e = reactJsxRuntimeCoreReexport.jsx(m, {
          reload: d
        });
        break;
      case s.DENIED:
        e = reactJsxRuntimeCoreReexport.jsx(O, {});
        break;
      case s.NORMAL:
        if (!S) {
          e = null;
          break;
        }
        let E = S.historyChangeDetail[c];
        e = reactJsxRuntimeCoreReexport.jsx(docxHistoryEditor.HistoryEditor, {
          copyable: g,
          clientVar: S.clientVar,
          historyChangeTarget: E,
          token: i,
          minHeight: 200,
          historyExternalChangeManager: l.current,
          onMount: y
        });
        break;
      default:
        e = null;
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "docx-history-container",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "docx-history-subscription",
        children: [reactJsxRuntimeCoreReexport.jsx(p, {
          ...C
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "docx-history-subscription-content",
          ref: L,
          children: e
        })]
      })
    });
  };
  var docLaunchChangeUtils = require("doc-launch-change-utils") /*id: 395613*/;
  let MM = styledComponentsCore.default.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 98;
  overflow: hidden;
`;
  let {
    deserializeBinary: Mt
  } = platformDocUtils.J5E;
  var Me = M => {
    let {
      changes: e,
      copyable: i
    } = M;
    let I = docTokenHelperUtils.resolveDocToken();
    let [N, g] = reactCoreLibraryReexport.useState(null);
    let [u, c] = reactCoreLibraryReexport.useState();
    let [j, n] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        let M = Mt(e).toObject();
        let {
          timestamp: i
        } = M;
        let N = docLaunchChangeUtils.normalizeVersions(M.changesList);
        let u = N.findIndex(M => M.token === I && !!M.version && M.version.length === 2 && (M.version.sort((M, e) => M - e), true));
        let j = N[u];
        if (!j) {
          throw Error("doc token do not match");
        }
        if (!i) {
          throw Error("missing timestamp in message which formatted by protocol buffer");
        }
        N.splice(u, 1);
        let a = docLaunchChangeUtils.formatChangeBlocks(N);
        g(j);
        c(i);
        n(a);
      })();
    }, [e, I]);
    let r = reactJsxRuntimeCoreReexport.jsx($, {
      copyable: i,
      change: N,
      token: I,
      context: {
        timestamp: u,
        externalBlockInfo: j
      }
    });
    return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(MM, {
      children: r
    }), document.body);
  };
  var Mi = reactReduxCore.connect(M => ({
    isShow: docxSubscriptionVisibility.isSubscriptionShow(M)
  }), {
    showSubscription: c,
    hideSubscription: j
  })(M => {
    let [e, i] = reactCoreLibraryReexport.useState({
      changes: ""
    });
    let {
      isShow: I,
      copyable: N,
      showSubscription: g,
      hideSubscription: u
    } = M;
    let {
      changes: c
    } = e;
    reactCoreLibraryReexport.useEffect(() => () => {
      u();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        let M = docLaunchChangeUtils.parseChangesQuery();
        let {
          subscription: e,
          oversize: I,
          subscribe_change_id: N
        } = M;
        let {
          changes: u
        } = M;
        if (e && (u || N)) {
          if (I === "1" && N) {
            let M = docTokenHelperUtils.resolveDocToken();
            try {
              let {
                data: {
                  changes: e
                }
              } = await docLaunchChangeUtils.fetchDocChanges(M, N);
              u = decodeURIComponent(e);
            } catch (M) {
              docxEventCollector.wrappedCollector("doc_bug_track_dev", {
                action: "docx_subscription",
                info: JSON.stringify({
                  error: JSON.stringify(M),
                  stage: "entry"
                })
              });
              return;
            }
          }
          i({
            changes: u
          });
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "docx_subscription",
            info: JSON.stringify({
              changes: u.length,
              oversize: I,
              stage: "entry"
            })
          });
          docLaunchChangeUtils.cleanSearchParam(["subscription", "changes", "oversize", "subscribe_change_id"]);
          g();
        }
      })();
    }, [g]);
    if (I) {
      return reactJsxRuntimeCoreReexport.jsx(Me, {
        copyable: N,
        changes: c
      });
    } else {
      return null;
    }
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return Mi;
    }
  });
}