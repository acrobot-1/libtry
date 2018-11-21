import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Label extends PureComponent {
  get removeText() {
    return this.props.removeText ? this.props.removeText : "✖";
  }

  get showRemoveButton() {
    return !!this.props.onRemove;
  }

  render() {
    return (
      <span
        key={this.props.key}
        title={this.props.title && this.props.title}
        className={`selected-label${!!this.props.hasError && " error"}`}
      >
        {this.props.value}
        {this.showRemoveButton && (
          <button onClick={this.props.onRemove} className="remove-label">
            {this.removeText}
          </button>
        )}
      </span>
    );
  }
}

Label.propTypes = {
  hasError: PropTypes.bool,
  key: PropTypes.any.isRequired,
  onRemove: PropTypes.func,
  removeText: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired
};
