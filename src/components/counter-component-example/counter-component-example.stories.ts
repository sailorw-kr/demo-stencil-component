export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/CounterComponent',
};
const Template = (args) => `
  <counter-component-example
    ${args.btntext && 'btntext="args.btntext"'}
  >
  </counter-component-example>`;

export const Counter = Template.bind({});
Counter.args = {
};