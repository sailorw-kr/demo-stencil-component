import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component-example',
  styleUrl: 'counter-component-example.css',
  shadow: true,
})
export class CounterComponentExample {
  @Prop() btntext?: string = '🔺';
  @Prop() variant?: string = 'primary';
  @State() counter: number = 0;
  @Event() didReset: EventEmitter;

  increment = () => this.counter++;
  decrement = () => this.counter--;

  reset = () => {
    this.counter = 0;
    this.didReset.emit(true);
  };

  render() {
    const { btntext, variant, counter, increment, decrement, reset } = this;
    return (
      <Host>
        <div class="buttons">
          <button onClick={increment}>{btntext}</button>
          <button onClick={decrement}>🔻</button>
        </div>
        <div class={`counter ${variant}`}>{counter}</div>
        <button onClick={reset}>reset counter</button>
      </Host>
    );
  }
}

