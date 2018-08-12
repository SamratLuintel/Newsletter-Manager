import React, { Component } from 'react';
import EmailEditor from 'react-email-editor';
import axios from 'axios';

class CreateTemplate extends Component {
    state = {}
    render() {
        return (
        <div>
            <button onClick={this.exportHtml}>Export HTML</button>
            <button onClick={this.saveDesign}>Save Design</button>
            <EmailEditor
                ref={editor => this.editor = editor}
                onLoad = {this.onLoad}
            />
        </div>)
    }
    exportHtml = () => {
        this.editor.exportHtml(data => {
          const {  html } = data
          console.log('exportHtml', html)
        })
    }
    saveDesign = () => {
        this.editor.saveDesign(design => {
          axios.post('/templates/create',design);
        })
    }
    onLoad = async ()=>{
        const template = await axios.get("/templates/5b6eed0bab7ae61258e2ddac");
        this.editor.loadDesign(template.data)
        // const json = JSON.parse(localStorage.getItem('template'));
    }
}

export default CreateTemplate;