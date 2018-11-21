import PropTypes from "prop-types";
import React from "react";
import Label from "./Label";

const SelectedLabels = ({
  selectedLabels,
  hasError,
  onRemove,
  removeText
}) => {
  const nonMandatoryProps = {
    hasError,
    onRemove,
    removeText
  };
  return selectedLabels.map(label => (
    <Label key={label.id} value={label.value} title={label.title} {...nonMandatoryProps} />
  ));
};

export default SelectedLabels;

SelectedLabels.propTypes = {
  hasError: PropTypes.any,
  onRemove: PropTypes.any,
  removeText: PropTypes.any,
  selectedLabels: PropTypes.shape({
    id: PropTypes.any.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.any
};
