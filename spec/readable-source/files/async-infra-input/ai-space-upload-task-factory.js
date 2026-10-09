// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiSpaceQuoteUtils'
// - Resolved require(577173) to 'ai-space-quote-utils'
// - Renamed variable 's' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'n' to 'businessLayoutConstants'
// - Resolved require(252973) to 'business-layout-constants'
// - Renamed variable 'o' to 'aiSpaceFileUploadTask'
// - Resolved require(292067) to 'ai-space-file-upload-task'
// - Renamed variable 'u' to 'aiSpaceDirectoryTask'
// - Resolved require(168031) to 'ai-space-directory-task'
// - Renamed variable 'c' to 'aiSpaceUploadTaskManager'
// - Resolved require(999425) to 'ai-space-upload-task-manager'
// - Updated imported property 'Q' to 'FileUploadTask' (module 292067)
// - Updated imported property 'V' to 'isImageBlob' (module 577173)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'Jq' to 'ItemType' (module 252973)
// - Updated imported property 'M' to 'DirectoryTask' (module 168031)
// - Updated imported property 'Q' to 'UploadTaskManager' (module 999425)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input.448035e9.js
         * chunkId: 38227
         * moduleId: 861298
         */
module.exports = function (module, exports, require) {
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var aiSpaceFileUploadTask = require("ai-space-file-upload-task") /*id: 292067*/;
  class a extends aiSpaceFileUploadTask.FileUploadTask {
    async mountNode() {
      var t;
      var r;
      let o = (t = this.parentTask) === null || t === undefined ? undefined : t.getNodeId();
      let a = aiSpaceQuoteUtils.isImageBlob(this.file);
      let {
        Uri: u,
        ImageHeight: l,
        ImageWidth: c
      } = this.uploadResult || {};
      let d = await apiServicesCollection.SamanthaApiService.UploadCodeNode({
        node_list: [{
          local_id: this.id,
          parent_id: o,
          name: this.file.name,
          key: u,
          node_content: {
            image_height: a ? l : undefined,
            image_width: a ? c : undefined
          },
          node_type: a ? businessLayoutConstants.ItemType.Image : businessLayoutConstants.ItemType.File
        }]
      });
      this.nodeId = (r = d.data) === null || r === undefined ? undefined : r.node_list[0]?.id;
    }
  }
  var aiSpaceDirectoryTask = require("ai-space-directory-task") /*id: 168031*/;
  class l extends aiSpaceDirectoryTask.DirectoryTask {
    async mountNode() {
      var t;
      var r;
      let i = (t = this.parentTask) === null || t === undefined ? undefined : t.getNodeId();
      let o = await apiServicesCollection.SamanthaApiService.UploadCodeNode({
        node_list: [{
          local_id: this.id,
          parent_id: i,
          name: this.directoryName,
          node_type: businessLayoutConstants.ItemType.Directory
        }]
      });
      this.nodeId = (r = o.data) === null || r === undefined ? undefined : r.node_list[0]?.id;
    }
  }
  var aiSpaceUploadTaskManager = require("ai-space-upload-task-manager") /*id: 999425*/;
  function d() {
    return new aiSpaceUploadTaskManager.UploadTaskManager({
      createFileTask: t => {
        let {
          id: e,
          parentTask: r,
          file: i
        } = t;
        return new a({
          id: e,
          parentTask: r,
          file: i
        });
      },
      createDirectoryTask: t => {
        let {
          id: e,
          parentTask: r,
          directoryName: i
        } = t;
        return new l({
          id: e,
          parentTask: r,
          directoryName: i
        });
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    createMarsCodeDirectoryService: function () {
      return d;
    }
  });
}