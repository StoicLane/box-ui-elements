import { COMMENTS_FIELDS_TO_FETCH, FEED_FILE_VERSIONS_FIELDS_TO_FETCH, FILE_VERSIONS_FIELDS_TO_FETCH, FOLDER_FIELDS_TO_FETCH, PREVIEW_FIELDS_TO_FETCH, SIDEBAR_FIELDS_TO_FETCH, TASK_ASSIGNMENTS_FIELDS_TO_FETCH, TASKS_FIELDS_TO_FETCH, fillMissingProperties, fillUserPlaceholder, findMissingProperties } from '../fields';
import { FIELD_ID, FIELD_NAME, FIELD_TYPE, FIELD_SIZE, FIELD_PARENT, FIELD_EXTENSION, FIELD_PERMISSIONS, FIELD_ITEM_COLLECTION, FIELD_ITEM_EXPIRATION, FIELD_PATH_COLLECTION, FIELD_CONTENT_CREATED_AT, FIELD_CONTENT_MODIFIED_AT, FIELD_MODIFIED_AT, FIELD_CREATED_AT, FIELD_SHARED_LINK, FIELD_HAS_COLLABORATIONS, FIELD_IS_EXTERNALLY_OWNED, FIELD_CREATED_BY, FIELD_MODIFIED_BY, FIELD_OWNED_BY, FIELD_RESTORED_BY, FIELD_TRASHED_BY, FIELD_DESCRIPTION, FIELD_REPRESENTATIONS, FIELD_SHA1, FIELD_WATERMARK_INFO, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_FILE_VERSION, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_VERSION_LIMIT, FIELD_VERSION_NUMBER, FIELD_METADATA_SKILLS, FIELD_TASK_ASSIGNMENT_COLLECTION, FIELD_IS_COMPLETED, FIELD_MESSAGE, FIELD_TAGGED_MESSAGE, FIELD_DUE_AT, FIELD_RESTORED_AT, FIELD_TRASHED_AT, FIELD_ASSIGNED_TO, FIELD_STATUS, FIELD_RESTORED_FROM, FIELD_RETENTION, FIELD_URL, FIELD_UPLOADER_DISPLAY_NAME, PLACEHOLDER_USER } from '../../constants';
describe('util/fields', function () {
  test('should fetch correct folder fields', function () {
    expect(FOLDER_FIELDS_TO_FETCH).toEqual([FIELD_ID, FIELD_NAME, FIELD_TYPE, FIELD_SIZE, FIELD_PARENT, FIELD_EXTENSION, FIELD_PERMISSIONS, FIELD_PATH_COLLECTION, FIELD_MODIFIED_AT, FIELD_CREATED_AT, FIELD_MODIFIED_BY, FIELD_HAS_COLLABORATIONS, FIELD_IS_EXTERNALLY_OWNED, FIELD_ITEM_COLLECTION, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_REPRESENTATIONS, FIELD_URL]);
  });
  test('should fetch correct preview fields', function () {
    expect(PREVIEW_FIELDS_TO_FETCH).toEqual([FIELD_ID, FIELD_PERMISSIONS, FIELD_SHARED_LINK, FIELD_SHA1, FIELD_FILE_VERSION, FIELD_NAME, FIELD_SIZE, FIELD_EXTENSION, FIELD_REPRESENTATIONS, FIELD_WATERMARK_INFO, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE]);
  });
  test('should fetch correct activity feed fields', function () {
    expect(FEED_FILE_VERSIONS_FIELDS_TO_FETCH).toEqual([FIELD_CREATED_AT, FIELD_EXTENSION, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_NAME, FIELD_RESTORED_AT, FIELD_RESTORED_BY, FIELD_SIZE, FIELD_TRASHED_AT, FIELD_TRASHED_BY, FIELD_UPLOADER_DISPLAY_NAME, FIELD_VERSION_NUMBER]);
  });
  test('should fetch correct sidebar fields', function () {
    expect(SIDEBAR_FIELDS_TO_FETCH).toEqual([FIELD_ID, FIELD_NAME, FIELD_SIZE, FIELD_EXTENSION, FIELD_FILE_VERSION, FIELD_SHARED_LINK, FIELD_PERMISSIONS, FIELD_CONTENT_CREATED_AT, FIELD_CONTENT_MODIFIED_AT, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_OWNED_BY, FIELD_DESCRIPTION, FIELD_METADATA_SKILLS, FIELD_ITEM_EXPIRATION, FIELD_VERSION_LIMIT, FIELD_VERSION_NUMBER, FIELD_IS_EXTERNALLY_OWNED, FIELD_RESTORED_FROM, FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_UPLOADER_DISPLAY_NAME]);
  });
  test('should fetch correct tasks fields', function () {
    expect(TASKS_FIELDS_TO_FETCH).toEqual([FIELD_TASK_ASSIGNMENT_COLLECTION, FIELD_IS_COMPLETED, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_DUE_AT, FIELD_MESSAGE]);
  });
  test('should fetch correct version fields', function () {
    expect(FILE_VERSIONS_FIELDS_TO_FETCH).toEqual([FIELD_AUTHENTICATED_DOWNLOAD_URL, FIELD_CREATED_AT, FIELD_EXTENSION, FIELD_IS_DOWNLOAD_AVAILABLE, FIELD_MODIFIED_AT, FIELD_MODIFIED_BY, FIELD_NAME, FIELD_PERMISSIONS, FIELD_RESTORED_AT, FIELD_RESTORED_BY, FIELD_RETENTION, FIELD_SIZE, FIELD_TRASHED_AT, FIELD_TRASHED_BY, FIELD_UPLOADER_DISPLAY_NAME, FIELD_VERSION_NUMBER]);
  });
  test('should fetch correct task assignment fields', function () {
    expect(TASK_ASSIGNMENTS_FIELDS_TO_FETCH).toEqual([FIELD_ASSIGNED_TO, FIELD_STATUS]);
  });
  test('should fetch correct comments fields', function () {
    expect(COMMENTS_FIELDS_TO_FETCH).toEqual([FIELD_TAGGED_MESSAGE, FIELD_MESSAGE, FIELD_CREATED_AT, FIELD_CREATED_BY, FIELD_MODIFIED_AT, FIELD_PERMISSIONS]);
  });
  describe('findMissingProperties()', function () {
    test('should return passed in properties when object is null', function () {
      var properties = ['foo', 'bar'];
      expect(findMissingProperties(null, properties)).toBe(properties);
    });
    test('should return passed in properties when object is empty', function () {
      var properties = ['foo', 'bar'];
      expect(findMissingProperties({}, properties)).toBe(properties);
    });
    test('should return passed in properties when object is invalid', function () {
      var properties = ['foo', 'bar'];
      expect(findMissingProperties('string', properties)).toBe(properties);
    });
    test('should return missing properties', function () {
      var properties = ['foo', 'bar'];
      expect(findMissingProperties({
        foo: 1,
        baz: 2
      }, properties)).toEqual(['bar']);
    });
  });
  describe('fillMissingProperties()', function () {
    test('should return passed in object when properties is null', function () {
      var obj = {
        foo: 1
      };
      expect(fillMissingProperties(obj)).toBe(obj);
    });
    test('should return passed in object when properties is empty', function () {
      var obj = {
        foo: 1
      };
      expect(fillMissingProperties(obj, [])).toBe(obj);
    });
    test('should return object with missing properties nulled', function () {
      var obj = {
        foo: {
          bar: 1
        }
      };
      var properties = ['foo', 'bar', 'foo.baz.bum', 'bar.bum', 'foo.baz.bup', 'bar.bop.bip'];
      expect(fillMissingProperties(obj, properties)).toEqual({
        foo: {
          bar: 1,
          baz: {
            bum: null,
            bup: null
          }
        },
        bar: {
          bum: null,
          bop: {
            bip: null
          }
        }
      });
    });
  });
  describe('fillUserPlaceholder()', function () {
    test('should return same object if none of the user properties are present', function () {
      var obj = {
        foo: 1
      };
      expect(fillUserPlaceholder(obj)).toEqual(obj);
    });
    test('should not modify existing created_by if the value is not null', function () {
      var obj = {
        foo: 1,
        created_by: {
          bar: 2
        }
      };
      expect(fillUserPlaceholder(obj)).toEqual(obj);
    });
    test('should add placeholder user for created_by if value is null', function () {
      var obj = {
        foo: 1,
        created_by: null
      };
      expect(fillUserPlaceholder(obj)).toEqual({
        foo: 1,
        created_by: PLACEHOLDER_USER
      });
    });
    test('should add placeholder user for all user properties if values are null', function () {
      var obj = {
        foo: 1,
        created_by: null,
        owned_by: null,
        assigned_to: null,
        modified_by: null
      };
      expect(fillUserPlaceholder(obj)).toEqual({
        foo: 1,
        created_by: PLACEHOLDER_USER,
        owned_by: PLACEHOLDER_USER,
        assigned_to: PLACEHOLDER_USER,
        modified_by: PLACEHOLDER_USER
      });
    });
  });
});