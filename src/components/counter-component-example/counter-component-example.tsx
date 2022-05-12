import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component-example',
  styleUrl: 'counter-component-example.css',
  shadow: true,
})
export class CounterComponentExample {
  @Prop() btntext?: string = 'up';
  @Prop() variant?: string = 'primary';
  @State() counter: number = 0;
  @Event() didReset: EventEmitter;
  increment = () => this.counter++;
  reset = () => {
    this.counter = 0;
    this.didReset.emit(true); //what does this do exactly?
  };

  render() {
    const { btntext, variant, counter, increment, reset } = this;
    return (
      <Host>
        <button onClick={increment}>{btntext}</button>
        <div class={`counter ${variant}`}>{counter}</div>
        <button onClick={reset}>reset counter</button>
        <slot name="slotdemo" />
      </Host>
    );
  }
}
