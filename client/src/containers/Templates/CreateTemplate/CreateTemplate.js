import React, { Component } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../../utils/is-empty";

class CreateTemplate extends Component {
  state = {
    name: "",
    error: ""
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Provide the name of the template"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <button onClick={this.exportHtml}>Export HTML</button>
        <button onClick={this.saveDesign}>Save Design</button>
        {this.state.error && <p>{this.state.error}</p>}
        <EmailEditor
          ref={editor => (this.editor = editor)}
          onLoad={this.onLoad}
        />
      </div>
    );
  }
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { html } = data;
      console.log("exportHtml", html);
    });
  };
  saveDesign = () => {
    if (isEmpty(this.state.name)) {
      return this.setState({ error: "You must provide a name before saving" });
    }
    this.editor.saveDesign(design => {
      console.log("This line is called");
      console.log(design);
      axios.post("/user/templates/create", {
        design,
        name: this.state.name
      });
    });
  };
  onLoad = async () => {
    const template = await axios.get("user/templates/5b6eed0bab7ae61258e2ddac");
    this.editor.loadDesign(template.data);
    // const json = JSON.parse(localStorage.getItem('template'));
  };
}

export default CreateTemplate;
