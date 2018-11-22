import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { KEYS } from './constants';

export default class AutoCompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
  }

  handleKeyUp(e) {
    console.log(this.state.activeIndex);
    if (e.keyCode === KEYS.ENTER && this.state.activeIndex !== null) {
      const selectedSuggestion = this.props.suggestions[this.state.activeIndex];
      console.log('selectedSuggestion: ', selectedSuggestion);
      this.props.onSelect({ value: selectedSuggestion.value, title: selectedSuggestion.caption });
      this.setState({ activeIndex: null });
      return;
    }

    if (this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
      let selectedValue = this.props.value;
      // by right it should be key in the range of 48 - 90
      if (e.keyCode === KEYS.COMMA) selectedValue = selectedValue.substr(0, selectedValue.length - 1);
      if (selectedValue) {
        this.props.onSelect({ value: selectedValue });
        this.setState({ activeIndex: null });
      }
      return;
    }
    if (e.keyCode === KEYS.BACKSPACE && this.props.value === '') {
      this.props.onRemove && this.props.onRemove(this.props.lastSelectedLabelsIndex);
      return;
    }
    if (this.props.suggestions.length > 0) {
      const lastSuggestionsIndex = this.props.suggestions.length - 1;
      let activeIndex = this.state.activeIndex;
      if (e.keyCode === KEYS.UP_ARROW) {
        if (activeIndex === 0) {
          activeIndex = null;
        } else if (activeIndex === null) {
          activeIndex = lastSuggestionsIndex;
        } else {
          activeIndex -= 1;
        }
      } else if (e.keyCode === KEYS.DOWN_ARROW) {
        if (activeIndex === null) {
          activeIndex = 0;
        } else if (activeIndex === lastSuggestionsIndex) {
          activeIndex = null;
        } else {
          activeIndex += 1;
        }
      }
      this.setState({ activeIndex });
    }
  }

  onSuggestionSelect(suggestion) {
    this.props.onSelect({ value: suggestion.value, title: suggestion.caption });
    this.setState({ activeIndex: null });
  }

  render() {
    return (
      <Fragment>
        <div className="auto-complete-input wrapper">
          <input
            type="text"
            value={this.props.value}
            placeholder={this.props.placeholder && this.props.placeholder}
            onChange={e => this.props.onChange(e.target.value)}
            onKeyUp={this.handleKeyUp}
            onBlur={() => this.setState({ activeIndex: null })}
          />
        </div>
        {this.props.suggestions.length > 0 && (
          <ul className="suggestions">
            {this.props.suggestions.map(
              (suggestion, index) => (
                <li
                  className={`suggestion-item${index === this.state.activeIndex ? ' active' : ''} `}
                  key={index}
                  onClick={() => this.onSuggestionSelect(suggestion)}
                >
                  {suggestion.avatarUrl && (
                    <div className="suggestion-avatar-wrapper">
                      <img className="suggestion-avatar" src={suggestion.avatarUrl} alt={suggestion.value} />
                    </div>
                  )}
                  <div className="suggestion-value">{suggestion.value}</div>
                  {suggestion.caption && <div className="suggestion-caption">{suggestion.caption}</div>}
                </li>
              ),
              this
            )}
          </ul>
        )}
      </Fragment>
    );
  }
}

AutoCompleteInput.propTypes = {
  delimiters: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array,
  value: PropTypes.string.isRequired,
  lastSelectedLabelsIndex: PropTypes.number,
};

AutoCompleteInput.defaultProps = {
  value: '',
  delimiters: [KEYS.ENTER, KEYS.COMMA],
  suggestions: [],
  placeholder: '',
};
