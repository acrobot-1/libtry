import React, { PureComponent } from 'react';
import LabelContainer from './lib/components/LabelContainer';
import SelectedLabels from './lib/components/SelectedLabels';
import AutoCompleteInput from './lib/components/AutoCompleteInput';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
      selectedLabels: [{ value: 'yoyoyoyo', title: 'wow wow' }],
      suggestions: [{ value: 'mvi@accordium.com', caption: 'test caption' }, { value: 'virandry@gmail.com', caption: 'Virandry' }],
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

  onSelect({ value, title }) {
    console.log(value, title);
    this.setState(prevState => {
      const selectedLabels = prevState.selectedLabels.slice();
      selectedLabels.push({ value, title });
      console.log(selectedLabels);
      return { selectedLabels, suggestions: [], value: '' };
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
          suggestions={this.state.suggestions}
        />
      </LabelContainer>
    );
  }
}
