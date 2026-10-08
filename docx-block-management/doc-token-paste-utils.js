// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hZ' to 'processDocTokenPaste'
// - Renamed export 'wJ' to 'getUserContextInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 786413
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var globalConfigGetters = require("global-config-getters") /*id: 47815*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  let v = () => {
    let {
      isBoeEnv: a
    } = platformDocUtils.RNe;
    let d = chatUserInfoService.userInfoService.getCurrentUser();
    let s = d.get("id") || window.User?.id;
    let c = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.unit", "eu_nc");
    let u = d.get("tenant_id") || window.User?.tenantId;
    let h = d.get("tenant_tag") || window.User?.tenant_tag;
    let v = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.slardar.region", "cn");
    let p = a() ? `boe-${v}` : {
      cn: "CN",
      sg: "SG",
      va: "US"
    }[v] || v;
    return {
      id: s,
      tenantId: u,
      tenantTag: h,
      tenantBrand: userEnvironmentUtils.getProduct(userEnvironmentUtils.productConstants.FEISHU),
      unit: c,
      region: v,
      geo: p
    };
  };
  let p = async (e, n, i, o) => {
    let r = globalConfigGetters.getCommonConfig()?.domain;
    let c = uuidGeneratorUtil.generateUuid();
    return await apiClientInstance.apiClient.post(`https://${r.lark_file}${apiEndpointConstants.apiEndpoints.GET_TOKEN_BY_FILEKEY}`, {
      resource_entities: [{
        uri: e,
        dest_mount_point_info: {
          mount_point: i,
          mount_key: n,
          ext: {
            drive_route_token: o
          }
        },
        dup_id: c
      }]
    }, {
      shouldRetry: true,
      retryMaxCount: 3,
      retryDelay: 1000
    });
  };
  let g = async (e, n, i, o) => {
    let l = "";
    let r = o === docApiConstants.fileTypes.IMAGE ? "image" : "file";
    try {
      let a = Date.now();
      let d = n.rootRecordId;
      let {
        data: s
      } = await p(e, i, o, d);
      let {
        new_token: c,
        err_code: u,
        err_msg: f
      } = (s == null ? undefined : s.old_new_keys)[0] || {};
      if (!c) {
        throw Error(`${u} : ${f}`);
      }
      if (c.file_token) {
        l = c.file_token;
        n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docs_blocks_abnormal_behaviour_trace_dev", {
          action: "docx_ccm_clipboard_paste_from_im_success",
          time: Date.now() - a,
          info: JSON.stringify({
            pasteType: o,
            isPasteFromIM: !!e
          })
        });
        await n.applyTransaction(`update${r}SnapShot`, e => {
          if (c.size) {
            e.replace(i, [r, "size"], c.size);
          }
          if (c.mime) {
            e.replace(i, [r, "mimeType"], c.mime);
          }
          if (c.name) {
            e.replace(i, [r, "name"], c.name);
          }
        }, {
          undoable: false
        });
      }
      return l;
    } catch (i) {
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docs_blocks_abnormal_behaviour_trace_dev", {
        action: "docx_ccm_clipboard_paste_from_im_fail",
        info: JSON.stringify({
          pasteType: o,
          isPasteFromIM: !!e
        })
      });
      throw Error(i == null ? undefined : i.message);
    }
  };
  require.d(exports, {
    processDocTokenPaste: function () {
      return g;
    },
    getUserContextInfo: function () {
      return v;
    }
  });
}