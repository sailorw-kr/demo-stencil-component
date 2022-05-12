export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/CounterComponent',
  // this is an example of how to add actions to the story
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'] // you can add custom events to this array to trigger actions
    }
  },
};
const Template = (args) => `
  <counter-component-example
    ${args.btntext && `btntext="${args.btntext}"`}
    ${args.variant && `variant="${args.variant}"`}
  />
`;

export const Counter = Template.bind({});
Counter.args = {
  btntext: "",
  variant: ""
};