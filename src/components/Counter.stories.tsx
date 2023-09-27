// Button.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CounterView, { CounterViewProps } from './Counter';

const meta :Meta = {
  title: 'Components/Counter',
  component: CounterView,
  argTypes: {
    initalValue: { control: 'number' },
    incrementValue: { control: 'number' },
  },
}
export default meta;

type Story = StoryObj<typeof CounterView>;

export const Default: Story = {
    render: () => <CounterView initalVaule={0} incrementValue={1} />,
  };
