import React from "react";
import {
  setTemplateFilterText,
  setTemplateSortOption
} from "../../../store/actions/template";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ActionBar = props => {
  const {
    filterText,
    setTemplateFilterText,
    sortBy,
    setTemplateSortOption
  } = props;

  return (
    <div className="Template__actionbar">
      <div className="Template__sortDropDown">
        <span className="Template__sortDropDown__description">Sort By:</span>
        <select
          value={sortBy}
          onChange={e => setTemplateSortOption(e.target.value)}
          className="Template__sortDropDown__select"
        >
          <option value="latest">Latest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
      <div class="Template__search" action="">
        <input
          type="text"
          placeholder="Search Saved Templates"
          className="Template__search__input"
          value={filterText}
          onChange={e => setTemplateFilterText(e.target.value)}
        />
        <span className="Template__search__search-button">
          <i className="fas fa-search" />
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  filterText: state.templates.filter.text,
  sortBy: state.templates.filter.sortBy
});

const mapDispatchToProps = dispatch => ({
  setTemplateFilterText: bindActionCreators(setTemplateFilterText, dispatch),
  setTemplateSortOption: bindActionCreators(setTemplateSortOption, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);
