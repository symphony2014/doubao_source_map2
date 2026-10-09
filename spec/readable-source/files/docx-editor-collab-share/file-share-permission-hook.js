// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useFileShare'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 577135
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var filePermissionConstants = require("file-permission-constants") /*id: 890549*/;
  var filePermissionUtils = require("file-permission-utils") /*id: 759649*/;
  var filePermissionErrorMappings = require("file-permission-error-mappings") /*id: 120017*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let m = corpcDebugLoggers.getServiceDebug("share");
  let v = {
    async fetchFilePublicPermission(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        m("[warn] RpcHost not initialized or no clientId");
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.fetchFilePublicPermission", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] fetchFilePublicPermission failed:", e.message);
        }
        throw e;
      }
    },
    async genInviteLink(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.genInviteLink", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] genInviteLink failed:", e.message);
        }
        throw e;
      }
    },
    async updateInviteLink(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.updateInviteLink", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] updateInviteLink failed:", e.message);
        }
        throw e;
      }
    },
    async getCollaborators(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.getCollaborators", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] getCollaborators failed:", e.message);
        }
        throw e;
      }
    },
    async removeCollaborators(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.removeCollaborators", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] removeCollaborators failed:", e.message);
        }
        throw e;
      }
    },
    async updateCollaboratorsPermission(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.updateCollaboratorsPermission", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] updateCollaboratorsPermission failed:", e.message);
        }
        throw e;
      }
    },
    async updateFilePublicPermission(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        throw Error("RPC not available");
      }
      try {
        return await n.call(e, "share.updateFilePublicPermission", t);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          m("[warn] updateFilePublicPermission failed:", e.message);
        }
        throw e;
      }
    }
  };
  let g = e => ({
    async genInvitedToken(t) {
      let {
        token: n,
        permission: i
      } = t;
      try {
        let {
          invite_link_token: t,
          apply_role: r
        } = await v.genInviteLink(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          applyRole: filePermissionUtils.permissionToRole(i)
        });
        return {
          inviteToken: t,
          permission: filePermissionUtils.roleToPermission(r)
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "gen_invited_token_error",
          error: e
        });
        samanthaToastFactory.defaultToast.error(i18nTranslationUtils.i18nextTranslate(filePermissionErrorMappings.invitationLinkErrors[`${e.code || ""}`]) || "获取邀请链接失败");
        throw e;
      }
    },
    async getInvitedToken(t) {
      let {
        token: n
      } = t;
      try {
        let {
          token: t,
          role: i
        } = (await v.fetchFilePublicPermission(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX
        })).perm_public.invite_link_info || {};
        return {
          inviteToken: t,
          permission: filePermissionUtils.roleToPermission(i)
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "get_invited_token_error",
          error: e
        });
        samanthaToastFactory.defaultToast.error(i18nTranslationUtils.i18nextTranslate(filePermissionErrorMappings.invitationLinkErrors[`${e.code || ""}`]) || "更新邀请链接失败");
        throw e;
      }
    },
    async updateInvitedToken(t) {
      let {
        token: n,
        permission: i,
        operation: o
      } = t;
      try {
        let {
          invite_link_token: t,
          apply_role: r
        } = await v.updateInviteLink(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          applyRole: filePermissionUtils.permissionToRole(i),
          operation: o
        });
        return {
          inviteToken: t,
          permission: filePermissionUtils.roleToPermission(r)
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "update_invited_token_error",
          error: e
        });
        samanthaToastFactory.defaultToast.error(i18nTranslationUtils.i18nextTranslate(filePermissionErrorMappings.invitationLinkErrors[`${e.code || ""}`]) || "更新邀请链接失败");
        throw e;
      }
    },
    async getCollaborators(t) {
      let {
        token: n,
        lastLabel: i
      } = t;
      try {
        let t = await v.getCollaborators(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          lastLabel: i
        });
        let {
          lark_user_id_to_doubao_uid: r = {}
        } = await apiServicesCollection.OtterDocApiService.AGWLarkUID2DoubaoUID({
          lark_user_ids: t.members.map(e => {
            let {
              owner_id: t
            } = e;
            return t;
          })
        }).then(e => {
          return e.data ?? {};
        });
        let s = t.members.map(e => ({
          ...e,
          permission: filePermissionUtils.getPermissionFromBitmask(e.permissions),
          doubao_uid: r[e.owner_id]
        }));
        return {
          ...t,
          members: s
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "get_collaborators_error",
          error: e
        });
        throw e;
      }
    },
    async deleteCollaborators(t) {
      let {
        token: n,
        ownerId: i
      } = t;
      try {
        await v.removeCollaborators(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          ownerId: i,
          ownerType: filePermissionConstants.entityTypes.user
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "delete_collaborators_error",
          error: e
        });
        throw e;
      }
    },
    async grantCollaborator(t) {
      let {
        token: n,
        ownerId: i,
        permission: r
      } = t;
      try {
        await v.updateCollaboratorsPermission(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          ownerId: i,
          ownerType: filePermissionConstants.entityTypes.user,
          permission: r,
          source: "suite_share"
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "grant_collaborator_error",
          error: e
        });
        throw e;
      }
    },
    async getInternetPublicMeta(t) {
      let {
        token: n
      } = t;
      try {
        let {
          link_share_entity_v2: t,
          has_modified_link_share: i,
          visibility_status: r
        } = (await v.fetchFilePublicPermission(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX
        })).perm_public;
        return {
          is_open: [filePermissionConstants.accessLevels.ANYONE_READABLE, filePermissionConstants.accessLevels.ANYONE_EDITABLE].includes(t),
          is_first_open: !i,
          visibility_status: r
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "get_internet_public_error",
          error: e
        });
        throw e;
      }
    },
    async setInternetPublicMeta(t) {
      let {
        token: n,
        open: i
      } = t;
      try {
        return await v.updateFilePublicPermission(e, {
          token: n,
          type: filePermissionConstants.fileTypes.DOCX,
          linkShareEntity: i ? filePermissionConstants.accessLevels.ANYONE_READABLE : filePermissionConstants.accessLevels.PRIVATE,
          externalAccessEntity: 1
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "set_internet_public_error",
          error: e
        });
        throw e;
      }
    }
  });
  let p = e => reactCoreLibraryReexport.useMemo(() => e ? g(e) : null, [e]);
  require.d(exports, {
    useFileShare: function () {
      return p;
    }
  });
}