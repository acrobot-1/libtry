import PropTypes from 'prop-types';
import React from 'react';
import Label from './Label';

const SelectedLabels = ({ selectedLabels, hasError, onRemove, removeText }) => {
  const nonMandatoryProps = {
    hasError,
    onRemove,
    removeText,
  };
  return selectedLabels.map((label, index) => (
    <Label key={index} labelIndex={index} value={label.value} title={label.title} {...nonMandatoryProps} />
  ));
};

export default SelectedLabels;

SelectedLabels.propTypes = {
  hasError: PropTypes.any,
  onRemove: PropTypes.any,
  removeText: PropTypes.any,
  selectedLabels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      value: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.any,
};