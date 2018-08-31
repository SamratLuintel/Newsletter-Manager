import React, { Component } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../utils/is-empty";

class EditTemplate extends Component {
  state = {
    name: "",
    textError: "",
    // This error is shown when something goes wrong while fetching data from server
    fetchingError: ""
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };
  //this.props.match.params.id
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
    });
  };
  saveDesign = () => {
    if (isEmpty(this.state.name)) {
      return this.setState({ error: "You must provide a name before saving" });
    }
    const id = this.props.match.params.id;

    this.editor.exportHtml(data => {
      const { html } = data;
      this.editor.saveDesign(async design => {
        console.log("This saveDesign is called");
        try {
          await axios.post(`/user/templates/${id}`, {
            design,
            name: this.state.name,
            html
          });
          console.log("Successfully saved the design");
        } catch (err) {
          console.log(err);
        }
      });
    });
  };
  onLoad = async () => {
    const id = this.props.match.params.id;
    try {
      const res = await axios.get(`/user/templates/${id}`);
      this.setState({ name: res.data.name });
      this.editor.loadDesign(res.data.template);
    } catch (err) {
      console.log(err);
    }
    // const json = JSON.parse(localStorage.getItem('template'));
  };
}

export default EditTemplate;
