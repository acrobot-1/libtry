import React, { PureComponent } from 'react';
import LabelContainer from './lib/components/LabelContainer';
import SelectedLabels from './lib/components/SelectedLabels';
import AutoCompleteInput from './lib/components/AutoCompleteInput';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
      selectedLabels: [{ id: 1, value: 'yoyoyoyo', title: 'wow wow' }],
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  get lastSelectedLabelsIndex() {
    return this.state.selectedLabels.length - 1;
  }

  onChange(value) {
    this.setState({ value });
  }

  onRemove(arrayIndex) {
    this.setState(prevState => {
      const selectedLabels = prevState.selectedLabels.slice();
      selectedLabels.splice(arrayIndex, 1);
      return { selectedLabels };
    });
  }

  onSelect({ value, id, title }) {
    this.setState(prevState => {
      const selectedLabels = prevState.selectedLabels;
      selectedLabels.push({ value, id, title });
      return { selectedLabels, value: '' };
    });
  }

  render() {
    return (
      <LabelContainer>
        <SelectedLabels selectedLabels={this.state.selectedLabels} onRemove={this.onRemove} />
        <AutoCompleteInput
          onChange={this.onChange}
          onSelect={this.onSelect}
          onRemove={this.onRemove}
          lastSelectedLabelsIndex={this.lastSelectedLabelsIndex}
          value={this.state.value}
        />
      </LabelContainer>
    );
  }
}
