export default {
  title: 'Components/KdsPrice',
  // this is an example of how to add actions to the story
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'] // you can add custom events to this array to trigger actions
    }
  },
};

const Template = (args) => `<kds-price value="${args.value}" quantity="${args.quantity}" original="${args.original}"></kds-price>`;

export const Example = Template.bind({});
Example.args = {
  value: '2.99',
  // value: {
  //   dollars: 2,
  //   cents: 99
  // },
  quantity: '1',
  original: '3.99'
};
