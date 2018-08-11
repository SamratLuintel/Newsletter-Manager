import React, { Component } from 'react';
import EmailEditor from 'react-email-editor';

class CreateTemplate extends Component {
    state = {}
    render() {
        return (
        <div>
            <EmailEditor
                ref={editor => this.editor = editor}
            />
        </div>)
    }
}

export default CreateTemplate;