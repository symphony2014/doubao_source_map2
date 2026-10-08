// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bk' to 'inputSkillConfig'
// - Renamed export 'NW' to 'searchBarConfig'
// - Renamed export 'cG' to 'immersiveFiles'
// - Renamed export 'gI' to 'mindMapConfig'
// - Renamed export 'gv' to 'finishedImageContext'
// - Renamed export 'gw' to 'skillTypeInfo'
// - Renamed export 'n' to 'skillVariables'
// - Renamed export 'op' to 'pdfHoverPosition'
// - Renamed export 'qC' to 'skillIdType'
// - Renamed export 'tt' to 'editImageContext'
// - Renamed export 'v7' to 'promptTemplate'
// - Renamed export 'wA' to 'thinkBrokenFlag'
// - Renamed export 'yj' to 'referenceFlag'
// - Renamed export 'yz' to 'altCardFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 397273
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let a = e => (e == null ? undefined : e.need_reference) === "0" ? {
    need_reference: false
  } : {};
  let s = e => safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["search_action_bar_config"]), {});
  let c = e => objectPathGetDefault.getObjectPathDefault(e, ["only_alt_card"]) ? {
    only_alt_card: "1"
  } : {};
  let d = e => !!objectPathGetDefault.getObjectPathDefault(e, ["think_broken"]);
  let u = e => (e == null ? undefined : e.pdf_hover_position) ? {
    hover_position: e == null ? undefined : e.pdf_hover_position
  } : {};
  let p = e => (e == null ? undefined : e.generate_mind_map) === "1" ? {
    generate_mind_map: true
  } : {};
  let h = e => (e == null ? undefined : e.immersive_reading_files) ? {
    immersive_files: e == null ? undefined : e.immersive_reading_files
  } : {};
  let m = e => {
    let n = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["samantha_context"]), {})?.query_context;
    if (n == null ? undefined : n.finished_image_token) {
      return {
        finished_image: n
      };
    } else {
      return {};
    }
  };
  let f = e => {
    let n = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["input_skill"]), undefined)?.variables;
    if (isNullishCheck.isNil(n)) {
      return {};
    } else {
      return n;
    }
  };
  let g = e => {
    let n = throttledPathFilterStringify.throttledPathStr(safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["input_skill"]), undefined), ["variables", "show_variables", "ext_info"]);
    if (isNullishCheck.isNil(n == null ? undefined : n.variables?.target_lang)) {
      return {};
    } else {
      return n;
    }
  };
  let v = e => {
    let {
      template_key: t,
      variables: n
    } = throttledPathFilterStringify.throttledPathStr(safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["input_skill"]), undefined), ["variables", "template_key", "skill_type"]) || {};
    if (t || (n == null ? undefined : n.reference_text)) {
      return {
        prompt_tpl: {
          ...(isNullishCheck.isNil(t) ? {} : {
            tpl_key: t
          }),
          ...(isNullishCheck.isNil(n == null ? undefined : n.reference_text) ? {} : {
            reference_text: n == null ? undefined : n.reference_text
          })
        }
      };
    } else {
      return {};
    }
  };
  let b = e => {
    let n = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["samantha_context"]), {})?.query_context;
    if (n == null ? undefined : n.edit_image_url) {
      return {
        edit_image: n
      };
    } else {
      return {};
    }
  };
  function y(e) {
    let t = e == null ? undefined : e.input_skill;
    let n = safeJsonUtils.safeParse(t, {});
    if (n.skill_type) {
      return n;
    } else {
      return null;
    }
  }
  function x(e) {
    let {
      skill_id_no_default: t,
      skill_type_no_default: n
    } = (e == null ? undefined : e.skill) || {};
    if (t && n) {
      return {
        skill_id: t,
        skill_type: n
      };
    } else {
      return null;
    }
  }
  require.d(exports, {
    inputSkillConfig: function () {
      return g;
    },
    searchBarConfig: function () {
      return s;
    },
    immersiveFiles: function () {
      return h;
    },
    mindMapConfig: function () {
      return p;
    },
    finishedImageContext: function () {
      return m;
    },
    skillTypeInfo: function () {
      return y;
    },
    skillVariables: function () {
      return f;
    },
    pdfHoverPosition: function () {
      return u;
    },
    skillIdType: function () {
      return x;
    },
    editImageContext: function () {
      return b;
    },
    promptTemplate: function () {
      return v;
    },
    thinkBrokenFlag: function () {
      return d;
    },
    referenceFlag: function () {
      return a;
    },
    altCardFlag: function () {
      return c;
    }
  });
}