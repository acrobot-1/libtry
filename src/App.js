import React, { PureComponent } from "react";
import AutoCompleteLabel from "./lib/components/AutoCompleteLabel";
import SelectedLabels from "./lib/components/SelectedLabels";

export default class App extends PureComponent {
  state = {
    selectedLabels: [{ id: 1, value: "yoyoyoyo", title: 'wow wow' }]
  };

  render() {
    return (
      <AutoCompleteLabel>
        <SelectedLabels selectedLabels={this.state.selectedLabels} onRemove={() => console.log('WWWWOOOW')}/>
      </AutoCompleteLabel>
    );
  }
}
