// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'submitBusinessInput'
// - Renamed export 'w' to 'prepareBusinessInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 129563
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  let a = e => {
    let {
      reportParams: t,
      abilityParams: i,
      skillId: a,
      skillType: o,
      query: u,
      editImgCtx: s,
      attachmentStates: c,
      extraExt: d
    } = e;
    let {
      style: p,
      ratio: _,
      model: f,
      template_type: v,
      camera_movement: m
    } = i || {};
    let g = {
      skill_id: a == null ? undefined : a.toString(),
      skill_type: o,
      variables: {
        style: p,
        ratio: _,
        model: f,
        template_type: v,
        camera_movement: m
      }
    };
    let y = {
      ...s
    };
    if (c == null ? undefined : c.length) {
      safePropertyAssignUtil.safePropertyAssign(y, {
        ref_images: c.map(e => {
          return {
            image_token: e.fileKey || e.localKey,
            refer_types: imageConfigConstants.styleKeys.overall,
            identifier: (e == null ? undefined : e.localKey) ?? ""
          };
        })
      });
    }
    return {
      text: u,
      reportParams: t || {},
      extraExt: {
        ...d,
        input_skill: JSON.stringify(g),
        samantha_context: JSON.stringify({
          query_context: y
        })
      },
      attachments: c == null ? undefined : c.map(e => {
        return {
          type: chatCoreConstants.ContentTypes.Image,
          key: e.fileKey || e.localKey,
          identifier: e.localKey ?? "",
          extra: {
            refer_types: "overall"
          }
        };
      })
    };
  };
  let o = async (e, t) => {
    let i = a(e);
    return await t([i]);
  };
  require.d(exports, {
    submitBusinessInput: function () {
      return o;
    },
    prepareBusinessInput: function () {
      return a;
    }
  });
}