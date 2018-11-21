import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

export default class AutoCompleteInput extends Component {
  render() {
    return (
      <div className="auto-complete-input wrapper">
        <DebounceInput
          type="text"
          className="search-files"
          placeholder="Search for documents"
          value={this.props.searchTerm}
          debounceTimeout={300}
          onChange={this.props.onSearch}
        />
        {this.props.suggestions && (
          <ul className="suggestions">
            {this.props.suggestions.map(
              suggestion => (
                <li
                  className={`suggestion-item${suggestion.isActive &&
                    "active"} `}
                  key={suggestion.id}
                  onClick={this.props.onSuggestionClick}
                >
                  {suggestion.avatarUrl && (
                    <div className="suggestion-avatar-wrapper">
                      <img
                        className="suggestion-avatar"
                        src={suggestion.avatarUrl}
                        alt={suggestion.value}
                      />
                    </div>
                  )}
                  <div className="suggestion-value">{suggestion.value}</div>
                  {suggestion.caption && (
                    <div className="suggestion-caption">
                      {suggestion.caption}
                    </div>
                  )}
                </li>
              ),
              this
            )}
          </ul>
        )}
      </div>
    );
  }
}
