import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

class InsertImage extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('insertImage', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Insert image',
        icon: imageIcon,
        tooltip: true
      });

      // Callback executed once the image is clicked.
      view.on('execute', () => {
        const imageUrl = prompt('Image URL');

        editor.model.change(writer => {
          const imageElement = writer.createElement('imageBlock', {
            src: imageUrl
          });

          // Insert the image in the current selection location.
          editor.model.insertContent(imageElement, editor.model.document.selection);
        });
      });

      return view;
    });
  }
}

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Bold, Italic, Image, InsertImage, ImageCaption, ImageToolbar],
    toolbar: ['bold', 'italic', 'insertImage'],
    image: {
      toolbar: ['toggleImageCaption']
    }
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
  })
  .catch(error => {
    console.error(error.stack);
  });