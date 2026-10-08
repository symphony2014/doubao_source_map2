// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N7' to 'getPaidReadingSettings'
// - Renamed export 'TF' to 'updatePreviewPosition'
// - Renamed export 'fK' to 'createPaidReadingOrder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_paid_subscription.2a41bf28.js
         * chunkId: 60668
         * moduleId: 267172
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  async function l(e) {
    let {
      skuId: i,
      tradeType: o,
      osType: l
    } = e;
    let d = docTokenHelperUtils.resolveDocToken();
    let c = platformDocUtils.gGk();
    let u = `/paid_reading/orders?obj_token=${d}&obj_type=${c}&sku_id=${i}`;
    return apiClientInstance.apiClient.post(u, {
      trade_type: o,
      os_type: l,
      scene: 1,
      return_url: window.location.href
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    });
  }
  async function d() {
    let e = docTokenHelperUtils.resolveDocToken();
    let i = platformDocUtils.gGk();
    let o = await apiClientInstance.apiClient.get(`/paid_reading/settings/?obj_token=${e}&obj_type=${i}`, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    });
    if ((o == null ? undefined : o.code) !== 0) {
      return null;
    }
    {
      let e = o.data?.current || {};
      return {
        amount: e.payment_amount ? Number(e.payment_amount) / 100 : null,
        period: e.payment_period,
        skuId: e.sku_id,
        previewPosition: o.data?.preview_position,
        isPaidReading: o.data?.is_paid_reading
      };
    }
  }
  async function c(e) {
    let {
      blockId: i
    } = e;
    let o = docTokenHelperUtils.resolveDocToken();
    let l = platformDocUtils.gGk();
    let d = `/paid_reading/preview_position?obj_token=${o}&obj_type=${l}`;
    return apiClientInstance.apiClient.post(d, {
      preview_position: i
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    });
  }
  require.d(exports, {
    getPaidReadingSettings: function () {
      return d;
    },
    updatePreviewPosition: function () {
      return c;
    },
    createPaidReadingOrder: function () {
      return l;
    }
  });
}