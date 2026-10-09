[ChatInputFileUpload button]
    |
    v
[handleAddFiles / handleAddImages / handleAddCiFiles]
    |
    v
[useAttachmentHook().addAttachment]
    |
    v
[attachment-upload-store-service]
    |
    +--> create local task
    +--> store preprocessTaskMap[localKey]
    +--> _getUploader(file|image|media)
            |
            v
        [UploaderService.upload]
            |
            +--> refreshToken()
            |      |
            |      v
            |   POST /alice/resource/prepare_upload
            |
            +--> client.addFile/addImageFile
            +--> client.start(fileKey)
            +--> progress / complete / error callbacks
    |
    v
[attachmentUploadStore updated with real uploaded key]
    |
    +--> optional MessagePreHandle / MultiMessagePreHandle / CodePreHandle
    |
    v
[send message]
    |
    +--> waitForAttachmentUploadKey(localKey) if needed
    +--> createAttachmentBlock(attachments, attachmentKeys, attachmentStates)
    +--> assembleContentBlocks(textBlock + attachmentBlock)
    +--> chatIMService.sendMessage(...)
