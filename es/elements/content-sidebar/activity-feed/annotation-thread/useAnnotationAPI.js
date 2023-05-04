import API from '../../../../api/APIFactory';

var useAnnotationAPI = function useAnnotationAPI(_ref) {
  var api = _ref.api,
      errorCallback = _ref.errorCallback,
      _ref$file = _ref.file,
      fileId = _ref$file.id,
      _ref$file$file_versio = _ref$file.file_version;
  _ref$file$file_versio = _ref$file$file_versio === void 0 ? {} : _ref$file$file_versio;
  var fileVersionId = _ref$file$file_versio.id,
      _ref$file$permissions = _ref$file.permissions,
      filePermissions = _ref$file$permissions === void 0 ? {} : _ref$file$permissions;

  var handleCreate = function handleCreate(_ref2) {
    var payload = _ref2.payload,
        successCallback = _ref2.successCallback;
    api.getAnnotationsAPI(false).createAnnotation(fileId, fileVersionId, payload, filePermissions, successCallback, errorCallback);
  };

  var handleFetch = function handleFetch(_ref3) {
    var id = _ref3.id,
        successCallback = _ref3.successCallback;
    api.getAnnotationsAPI(false).getAnnotation(fileId, id, filePermissions, successCallback, errorCallback, true // to fetch aanotation with its replies
    );
  };

  var handleDelete = function handleDelete(_ref4) {
    var id = _ref4.id,
        permissions = _ref4.permissions,
        successCallback = _ref4.successCallback;
    api.getAnnotationsAPI(false).deleteAnnotation(fileId, id, permissions, successCallback, errorCallback);
  };

  var handleEdit = function handleEdit(_ref5) {
    var id = _ref5.id,
        text = _ref5.text,
        permissions = _ref5.permissions,
        successCallback = _ref5.successCallback;
    api.getAnnotationsAPI(false).updateAnnotation(fileId, id, permissions, {
      message: text
    }, successCallback, errorCallback);
  };

  var handleStatusChange = function handleStatusChange(_ref6) {
    var id = _ref6.id,
        status = _ref6.status,
        permissions = _ref6.permissions,
        successCallback = _ref6.successCallback;
    api.getAnnotationsAPI(false).updateAnnotation(fileId, id, permissions, {
      status: status
    }, successCallback, errorCallback);
  };

  return {
    handleCreate: handleCreate,
    handleFetch: handleFetch,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleStatusChange: handleStatusChange
  };
};

export default useAnnotationAPI;
//# sourceMappingURL=useAnnotationAPI.js.map