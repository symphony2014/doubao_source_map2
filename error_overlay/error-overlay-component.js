// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable '_' to 'hostPlatformServiceTypes'
// - Resolved require(857478) to 'host-platform-service-types'
// - Renamed variable 'l' to 'diContainerInstance'
// - Resolved require(167867) to 'di-container-instance'
// - Renamed variable 'a' to 'styledComponentsCore'
// - Resolved require(842965) to 'styled-components-core'
// - Renamed variable 'f' to 'documentErrorConstants'
// - Resolved require(732640) to 'document-error-constants'
// - Renamed variable 'O' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'D' to 'picEmptyErrorSvg'
// - Resolved require(251785) to 'pic-empty-error-svg'
// - Updated imported property 'Q' to 'DocumentErrorCodes' (module 732640)
// - Updated imported property 'r' to 'EmptyErrorIcon' (module 251785)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'I' to 'diContainer' (module 167867)
// - Updated imported property 'w' to 'HostPlatformService' (module 857478)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: error_overlay.4f34988a.js
         * chunkId: 9112
         * moduleId: 860222
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var hostPlatformServiceTypes = require("host-platform-service-types") /*id: 857478*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let c = styledComponentsCore.default.div`
  height: 20%;
  flex-shrink: 0;
`;
  let p = styledComponentsCore.default.div`
  text-align: center;
`;
  let d = styledComponentsCore.default.div`
  position: relative;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  background: var(--bg-body);
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  ${p} {
    margin-bottom: 16px;
  }
`;
  let m = styledComponentsCore.default.img`
  max-width: ${e => {
    switch (e.size) {
      case "small":
        return 60;
      case "normal":
      default:
        return 120;
      case "large":
        return 150;
    }
  }}px;
`;
  let h = styledComponentsCore.default.div`
  margin: 0 30px;
  font-size: 14px
  text-align: center;
  color: var(--text-caption);

  .suite-error__title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-title);
  }

  .suite-error__body {
    font-size: 14px;
    font-weight: normal;
    margin-top: 17px;
    transition: box-shadow 0.25s ease-in-out;
  }

  .version-error__text {
    font-size: 14px;
    line-height: 22px;
  }
`;
  let x = styledComponentsCore.default.div`
  .version-error__btn{
    margin-top: 16px;
  }
`;
  let E = styledComponentsCore.default.p`
  font-size: 14px;
`;
  var documentErrorConstants = require("document-error-constants") /*id: 732640*/;
  let g = {
    [documentErrorConstants.DocumentErrorCodes.DELETED]: {
      msg: t("commom.document.has_been_deleted")
    },
    [documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED]: {
      msg: t("common.not_permission_access_to_document")
    },
    [documentErrorConstants.DocumentErrorCodes.NOT_FOUND]: {
      msg: t("common.document.not_exist")
    },
    [documentErrorConstants.DocumentErrorCodes.SERVICE_FAILED]: {
      msg: t("etherpad.server_abnormal")
    },
    [documentErrorConstants.DocumentErrorCodes.DEFAULT]: {
      msg: t("error.try_later")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_NOT_RETRY]: {
      msg: t("import.error_not_retry"),
      msg1: t("import.error_not_retry_contact")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_FORBIDDEN]: {
      msg: t("import.error_forbidden"),
      msg1: t("import.error_not_retry_contact")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_RETRY]: {
      msg: t("import.error_retry")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_OBJ_SIZE]: {
      msg: t("import.error_obj_size")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_OBJ_TYPE]: {
      msg: t("import.error_obj_type")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_PARAM_ERROR]: {
      msg: t("import.error_obj_error")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_LARK_DOC_ACCOUNT_INCONSISTENT]: {
      msg: t("import.error_lark_doc_account_inconsistent")
    },
    [documentErrorConstants.DocumentErrorCodes.FOLDER_NOT_AUTHORIZED]: {
      msg: t("permission.not_permission_access_to_folder")
    },
    [documentErrorConstants.DocumentErrorCodes.OPEN_DOC_ERROR]: {
      msg: t("open_doc.suite.error")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_VIOLATE_POLICIES]: {
      msg: t("LarkCCM_Security_ShareSuspend_Risk_Empty"),
      msg1: t("import.error_violate_policies_contact")
    },
    [documentErrorConstants.DocumentErrorCodes.IMPORT_EXCEED_LIMIT]: {
      msg: t("common.import_fail_of_create_num_limit"),
      msg1: t("common.please_pay")
    },
    [documentErrorConstants.DocumentErrorCodes.NETWORK_ERROR]: {
      msg: t("server.error_code_-8")
    },
    [documentErrorConstants.DocumentErrorCodes.NOT_SUPPORT]: {
      msg: t("CreationDoc_Docs_Unable_To_Access")
    },
    [documentErrorConstants.DocumentErrorCodes.SECRET_KEY_DELETE]: {
      msg: t("common.docuement_deleted")
    },
    [documentErrorConstants.DocumentErrorCodes.NOT_ALLOW_PREVIEW]: {
      msg: t("CreationDoc_Docs_UnableToAccess_SecurityReason")
    },
    [documentErrorConstants.DocumentErrorCodes.COMMON_NOT_SUPPORT]: {
      msg: t("CreationDoc_Docs_Common_UnableToAccess")
    },
    [documentErrorConstants.DocumentErrorCodes.VERSION_DELETED]: {
      msg: t("LarkCCM_Docx_VersionMgmt_Deleted")
    },
    [documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED_BITABLE_PRO]: {
      msg: t("common.not_permission_access_to_document")
    },
    [documentErrorConstants.DocumentErrorCodes.PASSWORD_REQUIRED]: {
      msg: t("common.not_permission_access_to_document")
    },
    [documentErrorConstants.DocumentErrorCodes.SYNCED_BLOCK_SEPARATE_PAGE_DELETED]: {
      msg: t("LarkCCM_Docs_SyncBlock_Deleted_Toast")
    },
    [documentErrorConstants.DocumentErrorCodes.DLP_CHECKING]: {
      msg: t("LarkCCM_Docs_DLP_OrgSecurityDetection_Desc")
    },
    [documentErrorConstants.DocumentErrorCodes.DOCX_OFFLINE_NOT_SYNCED]: {
      msg: t("LarkCCM_Docs_OfflineUse_FailedToOpenDocsInOfflineMode_Toast")
    },
    [documentErrorConstants.DocumentErrorCodes.DOCX_OFFLINE_NOT_SYNCED_FINISH]: {
      msg: t("LarkCCM_Docs_OfflineUse_OfflineDataNotSyncedYet_Desc")
    },
    [documentErrorConstants.DocumentErrorCodes.DOCX_CONTENT_UNAVAILABLE]: {
      msg: "该文档暂时无法查看"
    },
    [documentErrorConstants.DocumentErrorCodes.DOC_UPGRADED_REFRESH]: {
      msg: t("doc_upgraded_refreshPage_web")
    },
    [documentErrorConstants.DocumentErrorCodes.NEED_UPGRADE_DESKTOP]: {
      msg: t("doc_upgraded_updateApp_desktop")
    }
  };
  t("LarkCCM_Security_ShareSuspend_Risk_Empty");
  t("import_error_folder_violate_policies_contact");
  var u = e => g[e];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 100,
    height: 100,
    fill: "none",
    viewBox: "0 0 100 100",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_permission_svg__a)",
      fillOpacity: 0.6,
      stroke: "#F2F5FA",
      strokeWidth: 0.5,
      d: "M18 48.25h15c3.778 0 6.587 0 8.745.291 2.15.29 3.618.861 4.736 1.979 1.117 1.117 1.689 2.584 1.978 4.735.29 2.158.291 4.967.291 8.745v3c0 3.778 0 6.587-.291 8.745-.29 2.15-.861 3.618-1.979 4.736-1.117 1.117-2.584 1.689-4.735 1.978-2.158.29-4.967.291-8.745.291H18c-3.778 0-6.587 0-8.745-.291-2.15-.29-3.618-.861-4.735-1.978-1.118-1.118-1.69-2.585-1.979-4.736-.29-2.158-.291-4.967-.291-8.745v-3l.005-2.657c.014-2.485.068-4.47.286-6.088.29-2.15.861-3.618 1.979-4.736 1.117-1.117 2.584-1.689 4.735-1.978 2.158-.29 4.967-.291 8.745-.291Z",
      opacity: 0.6
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#EDEFF4",
      d: "M10 59a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 66a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 73a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_permission_svg__b)",
      d: "M60.5 35c0-6.351-5.149-11.5-11.5-11.5S37.5 28.649 37.5 35v8h-7v-8c0-10.217 8.283-18.5 18.5-18.5S67.5 24.783 67.5 35v8h-7z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_permission_svg__c)",
      stroke: "#F8F8F9",
      strokeWidth: 0.5,
      d: "M29 41.25h40c5.385 0 9.75 4.365 9.75 9.75v30c0 5.385-4.365 9.75-9.75 9.75H29c-5.385 0-9.75-4.365-9.75-9.75V51c0-5.385 4.365-9.75 9.75-9.75Z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#6B9FFF",
      d: "M49 57a5 5 0 0 1 3.047 8.963c-.344.264-.549.688-.464 1.113l1.46 7.301a1 1 0 0 1-.98 1.196H45.93a1 1 0 0 1-.981-1.196l1.46-7.306c.085-.424-.12-.848-.462-1.112A5 5 0 0 1 49 57"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_permission_svg__d)",
      fillOpacity: 0.6,
      stroke: "#F2F5FA",
      strokeWidth: 0.5,
      d: "M82.5 26.25h8c2.347 0 3.46.003 4.349.305a5.75 5.75 0 0 1 3.596 3.596c.302.89.305 2.002.305 4.349s-.003 3.46-.305 4.349a5.75 5.75 0 0 1-3.596 3.596c-.89.302-2.002.305-4.349.305h-8c-2.347 0-3.46-.003-4.349-.305a5.75 5.75 0 0 1-3.596-3.596c-.302-.89-.305-2.002-.305-4.349s.003-3.46.305-4.349a5.75 5.75 0 0 1 3.596-3.596c.89-.302 2.002-.305 4.349-.305Z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#E0E3ED",
      d: "M82 34.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M88 34.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M94 34.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_permission_svg__a",
        x1: 25.5,
        x2: 25.5,
        y1: 48,
        y2: 83,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E9EBF0"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#F7F8F8"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_permission_svg__b",
        x1: 49,
        x2: 49,
        y1: 20,
        y2: 67.251,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E2ECFD"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#fff"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_permission_svg__c",
        x1: 49,
        x2: 49,
        y1: 41,
        y2: 91,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E1EBFF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FAFCFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_permission_svg__d",
        x1: 86.5,
        x2: 86.5,
        y1: 26,
        y2: 43,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E9EBF0"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#F7F8F8"
        })]
      })]
    })]
  });
  let F = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 100,
    height: 100,
    fill: "none",
    viewBox: "0 0 100 100",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_doc_svg__a)",
      fillOpacity: 0.6,
      stroke: "#F2F5FA",
      strokeWidth: 0.5,
      d: "M24 39.25h2c3.778 0 6.587 0 8.745.291 2.15.29 3.618.861 4.736 1.979 1.117 1.117 1.689 2.584 1.978 4.735.29 2.158.291 4.967.291 8.745v9c0 3.778 0 6.587-.291 8.745-.29 2.15-.861 3.618-1.979 4.736-1.117 1.117-2.584 1.689-4.735 1.978-2.158.29-4.967.291-8.745.291h-2c-3.778 0-6.587 0-8.745-.291-2.15-.29-3.618-.861-4.735-1.978-1.118-1.118-1.69-2.585-1.979-4.736-.29-2.158-.291-4.967-.291-8.745v-9c0-3.778 0-6.587.291-8.745.29-2.15.861-3.618 1.979-4.736 1.117-1.117 2.584-1.689 4.735-1.978 2.158-.29 4.967-.291 8.745-.291Z",
      opacity: 0.6
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_doc_svg__b)",
      stroke: "#F8F8F9",
      strokeWidth: 0.5,
      d: "M31 12.25h38c5.385 0 9.75 4.365 9.75 9.75v48c0 5.385-4.365 9.75-9.75 9.75H31c-5.385 0-9.75-4.365-9.75-9.75V22c0-5.385 4.365-9.75 9.75-9.75Z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#F7FAFF",
      d: "M30 29a2 2 0 0 1 2-2h36a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 40a2 2 0 0 1 2-2h36a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 51a2 2 0 0 1 2-2h11a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 62.5a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 0 5h-10a2.5 2.5 0 0 1-2.5-2.5"
    }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
      width: 76,
      height: 76,
      x: 36,
      y: 33,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        xmlns: "http://www.w3.org/1999/xhtml",
        style: {
          backdropFilter: "blur(10px)",
          clipPath: "url(#pic_empty_no_doc_svg__c)",
          height: "100%",
          width: "100%"
        }
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_doc_svg__d)",
      fillOpacity: 0.2,
      d: "M92 71c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18",
      "data-figma-bg-blur-radius": 20
    }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
      width: 76,
      height: 76,
      x: 36,
      y: 33,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        xmlns: "http://www.w3.org/1999/xhtml",
        style: {
          backdropFilter: "blur(10px)",
          clipPath: "url(#pic_empty_no_doc_svg__e)",
          height: "100%",
          width: "100%"
        }
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#pic_empty_no_doc_svg__f)",
      d: "M91 71c0-9.389-7.611-17-17-17s-17 7.611-17 17 7.611 17 17 17v1c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18v-1c9.389 0 17-7.611 17-17",
      "data-figma-bg-blur-radius": 20
    }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
      width: 175.725,
      height: 175.687,
      x: -13.865,
      y: -16.842,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        xmlns: "http://www.w3.org/1999/xhtml",
        style: {
          backdropFilter: "blur(40px)",
          clipPath: "url(#pic_empty_no_doc_svg__g)",
          height: "100%",
          width: "100%"
        }
      })
    }), reactJsxRuntimeCoreReexport.jsx("g", {
      "data-figma-bg-blur-radius": 80,
      filter: "url(#pic_empty_no_doc_svg__h)",
      opacity: 0.8,
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#6B9FFF",
        d: "M66.577 63.595a1.524 1.524 0 0 1 2.135 0l5.37 5.3 5.2-5.131.115-.103a1.525 1.525 0 0 1 2.02.103c.553.545.588 1.409.104 1.994l-.103.113-5.2 5.131 5.2 5.13.103.114a1.475 1.475 0 0 1-.103 1.993 1.525 1.525 0 0 1-2.02.103l-.116-.103-5.2-5.13-5.37 5.3a1.524 1.524 0 0 1-2.135 0 1.476 1.476 0 0 1 0-2.107L71.947 71l-5.37-5.299a1.476 1.476 0 0 1 0-2.107"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_doc_svg__a",
        x1: 25,
        x2: 25,
        y1: 39,
        y2: 80,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E9EBF0"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#F7F8F8"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_doc_svg__b",
        x1: 50,
        x2: 50,
        y1: 12,
        y2: 100.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#CDDDFF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FAFCFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_doc_svg__d",
        x1: 74.064,
        x2: 74.064,
        y1: 55.231,
        y2: 80.669,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#D6D6D6"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#F9F9F9"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "pic_empty_no_doc_svg__f",
        x1: 61.824,
        x2: 74,
        y1: 53,
        y2: 89,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FDFDFF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#E9F1FF"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "pic_empty_no_doc_svg__c",
        transform: "translate(-36 -33)",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M92 71c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18"
        })
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "pic_empty_no_doc_svg__e",
        transform: "translate(-36 -33)",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M91 71c0-9.389-7.611-17-17-17s-17 7.611-17 17 7.611 17 17 17v1c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18v-1c9.389 0 17-7.611 17-17"
        })
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "pic_empty_no_doc_svg__g",
        transform: "translate(13.865 16.842)",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M66.577 63.595a1.524 1.524 0 0 1 2.135 0l5.37 5.3 5.2-5.131.115-.103a1.525 1.525 0 0 1 2.02.103c.553.545.588 1.409.104 1.994l-.103.113-5.2 5.131 5.2 5.13.103.114a1.475 1.475 0 0 1-.103 1.993 1.525 1.525 0 0 1-2.02.103l-.116-.103-5.2-5.13-5.37 5.3a1.524 1.524 0 0 1-2.135 0 1.476 1.476 0 0 1 0-2.107L71.947 71l-5.37-5.299a1.476 1.476 0 0 1 0-2.107"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("filter", {
        id: "pic_empty_no_doc_svg__h",
        width: 175.725,
        height: 175.687,
        x: -13.865,
        y: -16.842,
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("feFlood", {
          floodOpacity: 0,
          result: "BackgroundImageFix"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), reactJsxRuntimeCoreReexport.jsx("feOffset", {
          dx: 3,
          dy: 6
        }), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
          stdDeviation: 5
        }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          values: "0 0 0 0 0.184314 0 0 0 0 0.207843 0 0 0 0 0.25098 0 0 0 0.05 0"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_27019_35667"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), reactJsxRuntimeCoreReexport.jsx("feOffset", {}), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
          stdDeviation: 2
        }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          values: "0 0 0 0 0.184314 0 0 0 0 0.207843 0 0 0 0 0.25098 0 0 0 0.02 0"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in2: "effect1_dropShadow_27019_35667",
          result: "effect2_dropShadow_27019_35667"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in: "SourceGraphic",
          in2: "effect2_dropShadow_27019_35667",
          result: "shape"
        })]
      })]
    })]
  });
  var picEmptyErrorSvg = require("pic-empty-error-svg") /*id: 251785*/;
  let v = () => ({
    DeletedIcon: F,
    UnSupportIcon: F,
    ForbiddenIcon: y,
    NotFoundIcon: F,
    ServerErrorIcon: picEmptyErrorSvg.EmptyErrorIcon,
    ImportErrorIcon: picEmptyErrorSvg.EmptyErrorIcon,
    secretKeyDeletedIcon: picEmptyErrorSvg.EmptyErrorIcon,
    NotAllPreivewIcon: picEmptyErrorSvg.EmptyErrorIcon,
    DeletedRecycleBinIcon: F,
    EmptyNegativeNoWifi: picEmptyErrorSvg.EmptyErrorIcon,
    DocxContentUnavailableIcon: y
  });
  var I = (e, r) => {
    let o = v();
    return {
      [documentErrorConstants.DocumentErrorCodes.DELETED]: {
        size: "normal",
        icon: o.DeletedIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED]: {
        size: "normal",
        icon: o.ForbiddenIcon
      },
      [documentErrorConstants.DocumentErrorCodes.FOLDER_NOT_AUTHORIZED]: {
        size: "normal",
        icon: o.ForbiddenIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NOT_FOUND]: {
        size: "normal",
        icon: o.NotFoundIcon
      },
      [documentErrorConstants.DocumentErrorCodes.SERVICE_FAILED]: {
        size: "normal",
        icon: o.ServerErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.DEFAULT]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_NOT_RETRY]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_FORBIDDEN]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_RETRY]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_OBJ_SIZE]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_OBJ_TYPE]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_PARAM_ERROR]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_LARK_DOC_ACCOUNT_INCONSISTENT]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.OPEN_DOC_ERROR]: {
        size: "normal",
        icon: o.ServerErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_VIOLATE_POLICIES]: {
        size: "normal",
        icon: o.NotFoundIcon
      },
      [documentErrorConstants.DocumentErrorCodes.IMPORT_EXCEED_LIMIT]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NETWORK_ERROR]: {
        size: "normal",
        icon: o.ImportErrorIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NOT_SUPPORT]: {
        size: "normal",
        icon: o.UnSupportIcon
      },
      [documentErrorConstants.DocumentErrorCodes.SECRET_KEY_DELETE]: {
        size: "normal",
        icon: o.secretKeyDeletedIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NOT_ALLOW_PREVIEW]: {
        size: "normal",
        icon: o.NotAllPreivewIcon
      },
      [documentErrorConstants.DocumentErrorCodes.COMMON_NOT_SUPPORT]: {
        size: "normal",
        icon: o.UnSupportIcon
      },
      [documentErrorConstants.DocumentErrorCodes.VERSION_DELETED]: {
        size: "normal",
        icon: o.DeletedIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED_BITABLE_PRO]: {
        size: "normal",
        icon: o.ForbiddenIcon
      },
      [documentErrorConstants.DocumentErrorCodes.PASSWORD_REQUIRED]: {
        size: "normal",
        icon: o.ForbiddenIcon
      },
      [documentErrorConstants.DocumentErrorCodes.SYNCED_BLOCK_SEPARATE_PAGE_DELETED]: {
        size: "normal",
        icon: o.DeletedRecycleBinIcon
      },
      [documentErrorConstants.DocumentErrorCodes.DLP_CHECKING]: {
        size: "normal",
        icon: o.NotAllPreivewIcon
      },
      [documentErrorConstants.DocumentErrorCodes.DOCX_OFFLINE_NOT_SYNCED]: {
        size: "normal",
        icon: o.EmptyNegativeNoWifi
      },
      [documentErrorConstants.DocumentErrorCodes.DOCX_OFFLINE_NOT_SYNCED_FINISH]: {
        size: "normal",
        icon: o.EmptyNegativeNoWifi
      },
      [documentErrorConstants.DocumentErrorCodes.DOCX_CONTENT_UNAVAILABLE]: {
        size: "normal",
        icon: o.DocxContentUnavailableIcon
      },
      [documentErrorConstants.DocumentErrorCodes.DOC_UPGRADED_REFRESH]: {
        size: "normal;",
        icon: o.UnSupportIcon
      },
      [documentErrorConstants.DocumentErrorCodes.NEED_UPGRADE_DESKTOP]: {
        size: "normal;",
        icon: o.UnSupportIcon
      }
    }[e];
  };
  function j(e, r, o) {
    var s;
    if ((r = typeof (s = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var s = o.call(e, r || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, r, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = o;
    }
    return e;
  }
  class R extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      var e;
      var r;
      if ((e = (r = this.props).onDidMount) !== null && e !== undefined) {
        e.call(r);
      }
    }
    render() {
      let {
        shouldRender: e,
        type: r
      } = this.props;
      if (e && !e()) {
        return null;
      } else {
        return reactJsxRuntimeCoreReexport.jsxs(d, {
          className: `
          suite-body__overlay layout-column standard-scrollbar flex
          ${r === documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED ? "" : "standard-scroll-padding"}
        `,
          children: [reactJsxRuntimeCoreReexport.jsx(c, {
            className: "overlay__placeholder"
          }), this.renderIllustration(), reactJsxRuntimeCoreReexport.jsx(h, {
            "data-sel": "error-overlay-desc",
            children: this.getDescriptionContent()
          }), reactJsxRuntimeCoreReexport.jsx(x, {
            children: this.getExtraAction()
          })]
        });
      }
    }
    constructor(e) {
      super(e);
      j(this, "renderIllustration", () => {
        let {
          type: e,
          theme: r
        } = this.props;
        if (!e) {
          return null;
        }
        let {
          src: o,
          size: i,
          icon: n
        } = I(e, r);
        return reactJsxRuntimeCoreReexport.jsx(p, {
          className: `
          overlay__illustration
          overlay__${e}
        `,
          children: n ? reactJsxRuntimeCoreReexport.jsx(n, {}) : reactJsxRuntimeCoreReexport.jsx(m, {
            src: xssContentSanitizer.sanitizeUrl(o, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWxaN$kyMD$l$Xh-T1RK-$dFcHpX$mhyZ*xKW$Nub*lNMHBRWkcx$2$XSkhSalZN-mxKNlp$ZEdl$m96$m5vPQ"
            }),
            size: i
          })
        });
      });
      j(this, "getDescriptionContent", () => {
        let {
          getContent: e,
          getMsg: r,
          type: o
        } = this.props;
        if (typeof e == "function") {
          return e();
        }
        if (typeof r == "function") {
          return r();
        }
        if (!o) {
          return null;
        }
        let {
          msg: s
        } = u(o);
        return reactJsxRuntimeCoreReexport.jsx(E, {
          children: s
        });
      });
      j(this, "getExtraAction", () => {
        let {
          getAction: e,
          type: r
        } = this.props;
        if (typeof e == "function") {
          return e();
        }
        if (r === documentErrorConstants.DocumentErrorCodes.DOC_UPGRADED_REFRESH) {
          return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            style: {
              marginTop: 16
            },
            type: "primary",
            onClick: () => location.reload(),
            children: t("doc_upgraded_refreshPage_web_btn")
          });
        }
        if (r === documentErrorConstants.DocumentErrorCodes.NEED_UPGRADE_DESKTOP) {
          let {
            FusionDocDownloadClientBtn: e
          } = diContainerInstance.diContainer.get(hostPlatformServiceTypes.HostPlatformService);
          return reactJsxRuntimeCoreReexport.jsx(e, {
            className: `
          error__overlay__client-download-btn
        `,
            children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
              style: {
                marginTop: 16
              },
              type: "primary",
              children: t("doc_upgraded_updateApp_desktop_btn")
            })
          });
        }
        return null;
      });
      let {
        isPersonalUser: r,
        setAllMessageRead: o
      } = this.props;
      if (r && o) {
        o();
      }
    }
  }
  j(R, "defaultProps", {
    type: documentErrorConstants.DocumentErrorCodes.DEFAULT
  });
  var T = R;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return T;
    }
  });
}