import React, { PureComponent } from 'react';
import { CKEditor } from 'ckeditor4-react';
// CKEditor.editorUrl="https://cdn.ckeditor.com/4.16.0/full-all/ckeditor.js";
// Note that control component of a custom widget can't be
// a functional component. It will not work for some reason.
export class CustomWidgetControl extends PureComponent {

  getValue() {
    return this.props.value ? this.props.value : "";
  }

  onChange = (event, editor) => {
    console.log(event)
    const data = event.editor.getData();
    this.props.onChange(data);
  }

  render() {
    return (
      <CKEditor 
        initData={this.getValue()}
        onChange={this.onChange}
        editorUrl="https://cdn.ckeditor.com/4.16.0/full-all/ckeditor.js"
        config={ {
            toolbar: [ 
              { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
              { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
              { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
              { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
              { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
              { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
            ],
            extraPlugins: 'image2',
            filebrowserBrowseUrl: '/img/',
            filebrowserUploadUrl: '/img/',
            filebrowserImageUploadUrl: '/img/Upload?type=Images',
            filebrowserUploadMethod: 'form',
        }}
      />
    );
  }
}