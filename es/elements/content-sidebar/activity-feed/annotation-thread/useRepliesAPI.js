import APIFactory from '../../../../api';

var useRepliesAPI = function useRepliesAPI(_ref) {
  var annotationId = _ref.annotationId,
      api = _ref.api,
      errorCallback = _ref.errorCallback,
      fileId = _ref.fileId,
      filePermissions = _ref.filePermissions;

  var createReply = function createReply(_ref2) {
    var message = _ref2.message,
        requestId = _ref2.requestId,
        successCallback = _ref2.successCallback;

    if (!annotationId) {
      return;
    }

    api.getAnnotationsAPI(false).createAnnotationReply(fileId, annotationId, filePermissions, message, successCallback, errorCallback.bind(null, requestId));
  };

  var deleteReply = function deleteReply(_ref3) {
    var id = _ref3.id,
        permissions = _ref3.permissions,
        successCallback = _ref3.successCallback;
    api.getThreadedCommentsAPI(false).deleteComment({
      fileId: fileId,
      commentId: id,
      permissions: permissions,
      successCallback: successCallback,
      errorCallback: errorCallback.bind(null, id)
    });
  };

  var editReply = function editReply(_ref4) {
    var id = _ref4.id,
        message = _ref4.message,
        permissions = _ref4.permissions,
        successCallback = _ref4.successCallback;
    api.getThreadedCommentsAPI(false).updateComment({
      fileId: fileId,
      commentId: id,
      message: message,
      permissions: permissions,
      successCallback: successCallback,
      errorCallback: errorCallback.bind(null, id)
    });
  };

  return {
    createReply: createReply,
    deleteReply: deleteReply,
    editReply: editReply
  };
};

export default useRepliesAPI;
//# sourceMappingURL=useRepliesAPI.js.map