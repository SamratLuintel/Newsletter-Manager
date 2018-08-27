import React, { Component } from "react";

class NameEditor extends Component {
  state = {
    campaignName: "HEllo",
    editMode: false
  };

  editModeTrue = () => {
    console.log("This function is called");
    this.setState({ editMode: true });
  };

  editModeFalse = () => {
    this.setState({ editMode: false });
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    // If the user is in edit mode then only the campaignName can be changed
    // If the user clicks on save then it changes the campaign Name of CampaignEditor
    // and nextProps.campaignName gives new campaignName
    // If the user cancels from edit mode then campaignName is set to default. One from the state of Campaign Editor.
    if (
      !nextState.editMode &&
      nextState.campaignName !== nextProps.campaignName
    ) {
      return {
        campaignName: nextProps.campaignName
      };
    }
  };

  onNameChange = e => {
    console.log("This is called");
    console.log(e.target.value);
    this.setState({
      campaignName: e.target.value
    });
  };

  onNameSave = () => {
    const name = this.state.campaignName;
    //calls the parent function on CampaignEditor
    this.props.saveName(name);
    this.setState({ editMode: false });
  };
  render() {
    const { campaignName, editMode } = this.state;
    let renderData = null;
    if (!editMode) {
      renderData = (
        <div className="c-NameEditor">
          <h1>{campaignName}</h1>
          <p className="c-NameEditor__p" onClick={this.editModeTrue}>
            Edit Name
          </p>
        </div>
      );
    } else {
      renderData = (
        <div className="c-NameEditor">
          <input
            type="text"
            placeholder={campaignName}
            value={campaignName}
            onChange={this.onNameChange}
          />
          <button onClick={this.onNameSave}>Save</button>
          <p onClick={this.editModeFalse}>Cancel</p>
        </div>
      );
    }

    return renderData;
  }
}

export default NameEditor;
