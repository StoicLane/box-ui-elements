function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button/Button';
import PlainButton from '../../../components/plain-button';
import MenuToggle from '../../../components/dropdown-menu/MenuToggle';
import { TemplateDropdownBase as TemplateDropdown } from '../TemplateDropdown';
var template1 = {
  id: 'template1',
  templateKey: 'template1',
  displayName: 'template1 title',
  fields: [{
    id: 'field0',
    type: 'string',
    key: 'nodescfield',
    displayName: 'No Description Field'
  }, {
    id: 'field1',
    type: 'string',
    key: 'stringfield',
    displayName: 'String Field',
    description: 'example of a string field'
  }, {
    id: 'field2',
    type: 'string',
    key: 'emptystring',
    displayName: 'Empty String Field',
    description: 'example of an empty string field'
  }, {
    id: 'field3',
    type: 'float',
    key: 'floatfield',
    displayName: 'Float Field',
    description: 'example of a float field'
  }, {
    id: 'field4',
    type: 'float',
    key: 'emptyfloat',
    displayName: 'Empty Float Field',
    description: 'example of an empty float field'
  }, {
    id: 'field5',
    type: 'enum',
    key: 'enumfield',
    displayName: 'Enum Field',
    description: 'example of a enum field',
    options: [{
      key: 'yes'
    }, {
      key: 'no'
    }]
  }, {
    id: 'field6',
    type: 'enum',
    key: 'emptyenumfield',
    displayName: 'Empty Enum Field',
    description: 'example of an empty enum field',
    options: [{
      key: 'yes'
    }, {
      key: 'no'
    }]
  }, {
    id: 'field7',
    type: 'date',
    key: 'datefield',
    displayName: 'Date Field',
    description: 'example of a date field'
  }, {
    id: 'field8',
    type: 'date',
    key: 'emptydatefield',
    displayName: 'Empty Date Field',
    description: 'example of an empty date field'
  }]
};
var usedTemplate1 = {
  id: 'template1',
  templateKey: 'template1',
  displayName: 'template1 title',
  fields: [{
    id: 'field0',
    type: 'string',
    key: 'nodescfield',
    displayName: 'No Description Field'
  }, {
    id: 'field1',
    type: 'string',
    key: 'stringfield',
    displayName: 'String Field',
    description: 'example of a string field'
  }, {
    id: 'field2',
    type: 'string',
    key: 'emptystring',
    displayName: 'Empty String Field',
    description: 'example of an empty string field'
  }, {
    id: 'field3',
    type: 'float',
    key: 'floatfield',
    displayName: 'Float Field',
    description: 'example of a float field'
  }, {
    id: 'field4',
    type: 'float',
    key: 'emptyfloat',
    displayName: 'Empty Float Field',
    description: 'example of an empty float field'
  }, {
    id: 'field5',
    type: 'enum',
    key: 'enumfield',
    displayName: 'Enum Field',
    description: 'example of a enum field',
    options: [{
      key: 'yes'
    }, {
      key: 'no'
    }]
  }, {
    id: 'field6',
    type: 'enum',
    key: 'emptyenumfield',
    displayName: 'Empty Enum Field',
    description: 'example of an empty enum field',
    options: [{
      key: 'yes'
    }, {
      key: 'no'
    }]
  }, {
    id: 'field7',
    type: 'date',
    key: 'datefield',
    displayName: 'Date Field',
    description: 'example of a date field'
  }, {
    id: 'field8',
    type: 'date',
    key: 'emptydatefield',
    displayName: 'Empty Date Field',
    description: 'example of an empty date field'
  }]
};
describe('features/metadata-instance-editor/fields/', function () {
  var getWrapper = function getWrapper(props) {
    return shallow(React.createElement(TemplateDropdown, _extends({
      intl: {
        formatMessage: function formatMessage() {}
      },
      templates: [template1],
      usedTemplates: []
    }, props)));
  };

  test('should correctly render dropdown when isDropdownOpen is false', function () {
    var wrapper = getWrapper();
    wrapper.setState({
      isDropdownOpen: false
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render dropdown when isDropdownOpen is true', function () {
    var wrapper = getWrapper();
    wrapper.setState({
      isDropdownOpen: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render loading indicator when isDropdownOpen and isDropdownBusy is true', function () {
    var isDropdownBusy = true;
    var wrapper = getWrapper({
      isDropdownBusy: isDropdownBusy
    });
    wrapper.setState({
      isDropdownOpen: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render empty error message when no templates', function () {
    var wrapper = getWrapper({
      templates: []
    });
    wrapper.setState({
      isDropdownOpen: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render error message when no unused templates available', function () {
    var usedTemplates = [usedTemplate1];
    var wrapper = getWrapper({
      usedTemplates: usedTemplates
    });
    wrapper.setState({
      isDropdownOpen: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render plain button when no entry button is passed in', function () {
    var wrapper = getWrapper({});
    var plainButton = React.createElement(PlainButton, {
      className: "lnk",
      "data-resin-target": "metadata-templateaddmenu",
      type: "button"
    }, React.createElement(MenuToggle, null, React.createElement(FormattedMessage, {
      defaultMessage: "Add",
      id: "boxui.metadataInstanceEditor.templateAdd"
    })));
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(plainButton)).toEqual(true);
  });
  test('should correctly render button that is passed in', function () {
    var wrapper = getWrapper({
      entryButton: React.createElement(Button, null)
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(React.createElement(Button, null))).toEqual(true);
  });
  test('onOpen()', function () {
    var onDropdownToggle = jest.fn();
    var wrapper = getWrapper({
      onDropdownToggle: onDropdownToggle,
      templates: [],
      usedTemplates: []
    });
    wrapper.instance().onOpen();
    expect(onDropdownToggle).toHaveBeenCalledWith(true);
    expect(wrapper.state('isDropdownOpen')).toBe(true);
    expect(wrapper.state('filterText')).toBe('');
    expect(wrapper.state('templates')).toEqual([]);
  });
  test('onClose()', function () {
    var onDropdownToggle = jest.fn();
    var wrapper = getWrapper({
      onDropdownToggle: onDropdownToggle,
      templates: [],
      usedTemplates: []
    });
    wrapper.instance().onClose();
    expect(onDropdownToggle).toHaveBeenCalledWith(false);
    expect(wrapper.state('isDropdownOpen')).toBe(false);
  });
  test('componentDidUpdate()', function () {
    var wrapper = getWrapper({
      templates: [],
      usedTemplates: []
    });
    var template = {
      id: 'test-template1',
      templateKey: 'test-template1',
      displayName: 'test-template1 title'
    };
    var mockTemplates = {
      templates: [template]
    };
    wrapper.setProps(mockTemplates);
    expect(wrapper.state('templates')).toEqual([template]);
  });
});