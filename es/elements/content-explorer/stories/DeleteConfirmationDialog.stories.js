import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import PrimaryButton from '../../../components/primary-button/PrimaryButton';
import DeleteConfirmationDialog from '../DeleteConfirmationDialog';
import notes from './DeleteConfirmationDialog.stories.md';
export var deleteDialog = function deleteDialog() {
  var componentStore = new Store({
    isModalOpen: false
  });

  var openModal = function openModal() {
    return componentStore.set({
      isModalOpen: true
    });
  };

  var closeModal = function closeModal() {
    return componentStore.set({
      isModalOpen: false
    });
  };

  var rootElement = document.createElement('div');
  var appElement = document.createElement('div');
  rootElement.appendChild(appElement);

  if (document.body) {
    document.body.appendChild(rootElement);
  }

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement("div", null, React.createElement(DeleteConfirmationDialog, {
      appElement: appElement,
      isLoading: boolean('isLoading', false),
      isOpen: state.isModalOpen,
      item: {
        id: 'abcdefg',
        name: 'somethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdjsomethinggjsdlkfjsdkajfksdajfdj '
      },
      onCancel: closeModal,
      onDelete: function onDelete() {},
      parentElement: rootElement
    }), React.createElement(PrimaryButton, {
      onClick: openModal
    }, "Launch DeleteConfirmationDialog"));
  });
};
export default {
  title: 'Elements|ContentExplorer|DeleteConfirmationDialog',
  component: DeleteConfirmationDialog,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DeleteConfirmationDialog.stories.js.map