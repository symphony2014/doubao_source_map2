// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'filterToolboxByBlockType'
// - Renamed export 'F' to 'filterToolboxByConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 169537
         */
module.exports = function (module, exports, require) {
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  let u = docxFeatureFlags.isWEnabled();
  let p = {
    [docBlockTypeConstants.blockTypeConstants.OBJECTIVE]: {
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined
    },
    [docBlockTypeConstants.blockTypeConstants.KEY_RESULT]: {
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined
    },
    [docBlockTypeConstants.blockTypeConstants.OKR]: {
      [editorUiComponentConstants.uiComponentConstants.BlockStyle]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
        enabledChildrenNames: ["cut", "copy", "delete"]
      },
      [editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined,
      [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
        enabledChildrenNames: ["copyAnchorLink"]
      },
      [editorUiComponentConstants.uiComponentConstants.AppendBlock]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.Synced]: {
        enableAllGroup: true
      }
    },
    [docBlockTypeConstants.blockTypeConstants.AGENDA]: {
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enabledChildrenNames: ["comment"]
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined,
      [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
        enabledChildrenNames: ["copyAnchorLink"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
        enabledChildrenNames: ["comment", "cut", "copy", "delete"]
      },
      [editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.AppendBlock]: {
        enableAllGroup: true
      }
    },
    [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM]: {
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined,
      [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
        enabledChildrenNames: ["copyAnchorLink"]
      },
      [editorUiComponentConstants.uiComponentConstants.Forward]: {
        enabledChildrenNames: ["sendToIm"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
        enabledChildrenNames: ["comment", "delete"]
      },
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enabledChildrenNames: ["comment"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockToolbar]: {
        enabledChildrenNames: ["add-time"]
      },
      [editorUiComponentConstants.uiComponentConstants.AgendaItemModify]: {
        enabledChildrenNames: ["add-time"]
      }
    },
    [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE]: {
      [editorUiComponentConstants.uiComponentConstants.TextAlign]: {
        enabledChildrenNames: ["text align", "text align left", "text align center", "text align right"]
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: u ? {
        enabledChildrenNames: ["shareTextLink"]
      } : undefined,
      [editorUiComponentConstants.uiComponentConstants.TextStyle]: {
        enabledChildrenNames: ["Bold", "Strikethrough", "Italic", "Underline", "highlight submenu"]
      },
      [editorUiComponentConstants.uiComponentConstants.More]: {
        enabledChildrenNames: ["more", "copyAnchorLink", "translate", "create-lingo", "lingo-user-ask"]
      },
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enabledChildrenNames: ["reaction", "comment"]
      }
    }
  };
  let h = undefined;
  let m = {
    [editorUiComponentConstants.uiComponentConstants.Forward]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.DocAI]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Basic]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Common]: {
      enabledChildrenNames: ["slash image", "slash file", "table", "slash grid", "slash callout", "slash todo", "diagram whiteboard normal", "mindmap block", "slash mindmap", "equation block", "slash equation"]
    },
    [editorUiComponentConstants.uiComponentConstants.Drawing]: {
      enabledChildrenNames: ["diagram whiteboard normal", "diagram whiteboard flowchart", "diagram whiteboard mindmap", "diagram whiteboard uml", "diagram more", "mindmap block", "slash mindmap", "diagram flowchart", "diagram UML"]
    },
    [editorUiComponentConstants.uiComponentConstants.Cooperation]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Application]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Embed]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Advanced]: {
      enabledChildrenNames: ["bookmark block"]
    },
    [editorUiComponentConstants.uiComponentConstants.Video]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TeamCooperation]: {
      enabledChildrenNames: ["slash mention user", "slash mention chat", "slash mention page", "slash okr", "slash reminder", "poll block"]
    },
    [editorUiComponentConstants.uiComponentConstants.BlockStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.AppendBlock]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.NoResult]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextTurninto]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextAlign]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Align]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Comment]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockToolbar]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.MergeCell]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.PopoverMenu]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.ExtendCommand]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.AddChildDoc]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Edit]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Table]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.CellBackgroundColor]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TableCellModify]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.More]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockFold]: {
      enableAllGroup: true
    }
  };
  let f = {
    [editorUiComponentConstants.uiComponentConstants.DocAI]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Forward]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Basic]: {
      childrenFilter: e => e.length > 5 ? e.filter(e => (e == null ? undefined : e.name) !== "slash divider") : e.map(e => e.type === editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems ? {
        ...e,
        children: e.children.filter(e => (e == null ? undefined : e.name) !== "slash divider")
      } : e)
    },
    [editorUiComponentConstants.uiComponentConstants.Common]: {
      enabledChildrenNames: ["slash image", "table", "slash grid", "slash callout", "slash todo"]
    },
    [editorUiComponentConstants.uiComponentConstants.Drawing]: {
      enabledChildrenNames: ["diagram flowchart", "diagram UML"]
    },
    [editorUiComponentConstants.uiComponentConstants.Cooperation]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Application]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Embed]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Advanced]: {
      enabledChildrenNames: ["bookmark block"]
    },
    [editorUiComponentConstants.uiComponentConstants.Video]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TeamCooperation]: {
      enabledChildrenNames: ["slash mention user", "slash mention page"]
    },
    [editorUiComponentConstants.uiComponentConstants.BlockStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.AppendBlock]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.NoResult]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextTurninto]: {
      childrenFilter: e => e.map(e => e.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren ? {
        ...e,
        children: e.children.filter(e => e.name !== "synced")
      } : e)
    },
    [editorUiComponentConstants.uiComponentConstants.TextAlign]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Align]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Comment]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockToolbar]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.MergeCell]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.PopoverMenu]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.ExtendCommand]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.AddChildDoc]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Edit]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Table]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.CellBackgroundColor]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TableCellModify]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.More]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: {
      enableAllGroup: true
    }
  };
  editorUiComponentConstants.uiComponentConstants.DocAI;
  editorUiComponentConstants.uiComponentConstants.Basic;
  editorUiComponentConstants.uiComponentConstants.Common;
  editorUiComponentConstants.uiComponentConstants.Wiki;
  editorUiComponentConstants.uiComponentConstants.Drawing;
  editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate;
  editorUiComponentConstants.uiComponentConstants.Data;
  editorUiComponentConstants.uiComponentConstants.Bitable;
  editorUiComponentConstants.uiComponentConstants.Cooperation;
  editorUiComponentConstants.uiComponentConstants.Application;
  editorUiComponentConstants.uiComponentConstants.Embed;
  editorUiComponentConstants.uiComponentConstants.Advanced;
  editorUiComponentConstants.uiComponentConstants.Video;
  editorUiComponentConstants.uiComponentConstants.Design;
  editorUiComponentConstants.uiComponentConstants.Code;
  editorUiComponentConstants.uiComponentConstants.Form;
  editorUiComponentConstants.uiComponentConstants.TeamCooperation;
  editorUiComponentConstants.uiComponentConstants.ProjectManage;
  editorUiComponentConstants.uiComponentConstants.Map;
  editorUiComponentConstants.uiComponentConstants.Vote;
  editorUiComponentConstants.uiComponentConstants.Collection;
  editorUiComponentConstants.uiComponentConstants.ThirdPartyContent;
  editorUiComponentConstants.uiComponentConstants.BlockStyle;
  editorUiComponentConstants.uiComponentConstants.BlockOperation;
  editorUiComponentConstants.uiComponentConstants.BlockShare;
  editorUiComponentConstants.uiComponentConstants.BlockAbility;
  editorUiComponentConstants.uiComponentConstants.AppendBlock;
  editorUiComponentConstants.uiComponentConstants.NoResult;
  editorUiComponentConstants.uiComponentConstants.TextTurninto;
  editorUiComponentConstants.uiComponentConstants.Align;
  editorUiComponentConstants.uiComponentConstants.TextStyle;
  editorUiComponentConstants.uiComponentConstants.Comment;
  editorUiComponentConstants.uiComponentConstants.BlockToolbar;
  editorUiComponentConstants.uiComponentConstants.MergeCell;
  editorUiComponentConstants.uiComponentConstants.PopoverMenu;
  editorUiComponentConstants.uiComponentConstants.ISVBlock;
  editorUiComponentConstants.uiComponentConstants.ISVBlockDebug;
  editorUiComponentConstants.uiComponentConstants.ExtendCommand;
  editorUiComponentConstants.uiComponentConstants.AddChildDoc;
  editorUiComponentConstants.uiComponentConstants.DocMiniApp;
  editorUiComponentConstants.uiComponentConstants.Edit;
  editorUiComponentConstants.uiComponentConstants.Table;
  editorUiComponentConstants.uiComponentConstants.CellBackgroundColor;
  editorUiComponentConstants.uiComponentConstants.TableCellModify;
  editorUiComponentConstants.uiComponentConstants.More;
  editorUiComponentConstants.uiComponentConstants.Forward;
  editorUiComponentConstants.uiComponentConstants.Translate;
  editorUiComponentConstants.uiComponentConstants.Button;
  editorUiComponentConstants.uiComponentConstants.Meego;
  editorUiComponentConstants.uiComponentConstants.Synced;
  editorUiComponentConstants.uiComponentConstants.AgendaItemModify;
  let v = {
    [editorUiComponentConstants.uiComponentConstants.Basic]: {
      enabledChildrenNames: ["basic", "slash text", "text", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "heading7", "heading8", "heading9", "slash heading1", "slash heading2", "slash heading3", "slash heading4", "slash heading5", "slash heading6", "slash heading7", "slash heading8", "slash heading9", "ordered", "bullet", "todo", "slash ordered", "slash bullet", "slash todo", "code", "quote", "slash quote", "slash code", "slash divider", "link"]
    },
    [editorUiComponentConstants.uiComponentConstants.Common]: {
      enabledChildrenNames: ["task", "slash todo", "slash image", "slash file", "equation block", "slash equation"]
    },
    [editorUiComponentConstants.uiComponentConstants.TeamCooperation]: {
      enabledChildrenNames: ["slash mention user", "slash mention chat", "slash mention page", "slash reminder"]
    },
    [editorUiComponentConstants.uiComponentConstants.Advanced]: {
      enabledChildrenNames: ["bookmark block"]
    },
    [editorUiComponentConstants.uiComponentConstants.ProjectManage]: {
      enabledChildrenNames: ["slash jira issue", "slash jira"]
    },
    [editorUiComponentConstants.uiComponentConstants.Embed]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Application]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.DocAI]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Wiki]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockAbility]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextTurninto]: {
      childrenFilter: e => e.map(e => e.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren ? {
        ...e,
        children: e.children.filter(e => e.name !== "callout")
      } : e)
    },
    [editorUiComponentConstants.uiComponentConstants.Align]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextAlign]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.TextStyle]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Comment]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.BlockToolbar]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.PopoverMenu]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Edit]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.More]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Translate]: {
      enableAllGroup: true
    },
    [editorUiComponentConstants.uiComponentConstants.Forward]: {
      enabledChildrenNames: ["sendToIm"]
    }
  };
  let _ = {
    [docBlockTypeConstants.blockTypeConstants.PROGRESS]: {
      [editorUiComponentConstants.uiComponentConstants.Comment]: {
        enabledChildrenNames: ["comment", "reaction"]
      },
      [editorUiComponentConstants.uiComponentConstants.Forward]: {
        enabledChildrenNames: ["sendToIm"]
      },
      [editorUiComponentConstants.uiComponentConstants.Edit]: {
        enabledChildrenNames: ["edit"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockToolbar]: {
        enabledChildrenNames: ["align left", "align center", "align right", "fullscreen", "download", "divider", "Crop", "Reset", "caption"]
      },
      [editorUiComponentConstants.uiComponentConstants.Basic]: {
        enabledChildrenNames: ["basic", "slash text", "text", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "heading7", "heading8", "heading9", "slash heading1", "slash heading2", "slash heading3", "slash heading4", "slash heading5", "slash heading6", "slash heading7", "slash heading8", "slash heading9", "ordered", "bullet", "todo", "slash ordered", "slash bullet", "slash todo", "link"]
      },
      [editorUiComponentConstants.uiComponentConstants.Common]: {
        enabledChildrenNames: ["slash todo", "slash image", "slash file", "slash grid"]
      },
      [editorUiComponentConstants.uiComponentConstants.TeamCooperation]: {
        enabledChildrenNames: ["slash mention user", "slash mention page"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockStyle]: {
        enabledChildrenNames: ["AlignList", "align left", "align center", "align right", "align divider", "increase indentation", "reduce indentation", "BlockColor"]
      },
      [editorUiComponentConstants.uiComponentConstants.BlockOperation]: {
        enabledChildrenNames: ["comment", "reaction", "cut", "copy", "delete"]
      },
      [editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.BlockShare]: {
        enabledChildrenNames: ["copyAnchorLink"]
      },
      [editorUiComponentConstants.uiComponentConstants.TextTurninto]: {
        enabledChildrenNames: ["text turninto submenu", "submenu", "text", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "heading7", "heading8", "heading9", "headingn", "ordered", "bullet", "todo"]
      },
      [editorUiComponentConstants.uiComponentConstants.TextAlign]: {
        enabledChildrenNames: ["text align", "text align left", "text align center", "text align right", "text align divider", "increase indentation", "reduce indentation"]
      },
      [editorUiComponentConstants.uiComponentConstants.TextStyle]: {
        enabledChildrenNames: ["Bold", "Strikethrough", "Italic", "Underline", "text toolbar link", "inlinecode", "highlight submenu"]
      },
      [editorUiComponentConstants.uiComponentConstants.More]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.ShareTextLink]: {
        enableAllGroup: true
      },
      [editorUiComponentConstants.uiComponentConstants.DocMiniApp]: {
        enableAllGroup: true
      }
    },
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: m,
    [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: m,
    [docBlockTypeConstants.blockTypeConstants.AI]: f,
    [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT]: v
  };
  let g = {
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: m,
    [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: m,
    [docBlockTypeConstants.blockTypeConstants.AI]: f
  };
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  let C = e => {
    let {
      menuItem: r,
      enabledChildrenNamesMap: o
    } = e;
    if (!r) {
      return [];
    }
    let n = [];
    r.forEach(e => {
      if (o[e.name]) {
        if (e.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren || e.type === editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems) {
          let {
            children: r
          } = e;
          n.push({
            ...e,
            children: C({
              menuItem: r.filter(e => !!e),
              enabledChildrenNamesMap: o
            })
          });
        } else {
          n.push(e);
        }
      }
    });
    return n;
  };
  let x = e => {
    let {
      configs: r,
      toolboxGroups: o
    } = e;
    if (!r) {
      return o;
    }
    let l = [];
    o.forEach(e => {
      let o = r[e.key];
      if (!o) {
        return;
      }
      let {
        childrenFilter: n,
        enabledChildrenNames: a,
        enableAllGroup: i
      } = o;
      if (i) {
        l.push(e);
      }
      if (a) {
        let {
          children: r
        } = e;
        let o = {};
        a.forEach(e => o[e] = true);
        let n = C({
          menuItem: r,
          enabledChildrenNamesMap: o
        });
        return l.push({
          ...e,
          children: n || []
        });
      }
      if (n) {
        return l.push({
          ...e,
          children: n(e.children)
        });
      }
    });
    return l;
  };
  let w = e => {
    let {
      context: r,
      toolboxGroups: o,
      options: l
    } = e;
    let {
      blocks: s,
      blockManager: d
    } = r;
    if (!(s == null ? undefined : s.length)) {
      return o;
    }
    let u = docBlockViewUtils.getBlockEdge(s, l == null ? undefined : l.isAppend);
    let h = [];
    if (l == null ? undefined : l.isAppend) {
      h = o;
      Object.keys(g).forEach(e => {
        if (docxBlockUtils_1.hasParentOfBlockType(u.id, d, e) || e === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && syncedReferenceBlockUtils.isSyncedReferenceBlock(u.model.editorAPI) || e === docBlockTypeConstants.blockTypeConstants.AI && aiBlockTypeUtils.hasAiBlockInPath(d, u.id)) {
          h = x({
            configs: g[e],
            toolboxGroups: h
          });
        }
      });
    } else {
      h = x({
        configs: p[u == null ? undefined : u.type],
        toolboxGroups: o
      });
      Object.keys(_).forEach(e => {
        if (docxBlockUtils_1.hasParentOfBlockType(u.id, d, e) || e === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && syncedReferenceBlockUtils.isSyncedReferenceBlock(u.model.editorAPI) || e === docBlockTypeConstants.blockTypeConstants.AI && aiBlockTypeUtils.hasAiBlockInPath(d, u.id)) {
          h = x({
            configs: _[e],
            toolboxGroups: h
          });
        }
      });
    }
    return h;
  };
  let T = e => x({
    configs: h,
    toolboxGroups: e
  });
  require.d(exports, {
    filterToolboxByBlockType: function () {
      return w;
    },
    filterToolboxByConfig: function () {
      return T;
    }
  });
}