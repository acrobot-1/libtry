import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KEYS } from './constants';
import { DebounceInput } from 'react-debounce-input';

export default class AutoCompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: props.suggestions };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) this.setState({ suggestions: this.props.suggestions });
  }

  handleKeyDown = e => {
    if (this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
      const selectedValue = this.props.value;
      this.props.onSelect({ value: selectedValue });
    }
  };

  render() {
    return (
      <div className="auto-complete-input wrapper">
        <input
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder && this.props.placeholder}
          onChange={e => this.props.onChange(e.target.value)}
          onKeyDown={this.handleKeyDown}
        />
        {this.props.suggestions.length > 0 && (
          <ul className="suggestions">
            {this.state.suggestions.map(
              suggestion => (
                <li className={`suggestion-item${suggestion.isActive && 'active'} `} key={suggestion.id} onClick={this.props.onSelect}>
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
      </div>
    );
  }
}

AutoCompleteInput.propTypes = {
  delimiters: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array,
  value: PropTypes.string.isRequired,
};

AutoCompleteInput.defaultProps = {
  value: '',
  delimiters: [KEYS.ENTER, KEYS.COMMA],
  suggestions: [],
  placeholder: '',
};
