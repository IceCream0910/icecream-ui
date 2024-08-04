import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '..';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    componentSubtitle: "빙빙 돌아가는 로딩 스피너",
    docs: {
      description: {
        // 추가
        component: ``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    x: { control: { type: 'text' } },
    y: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Spinner: Story = {
  args: {
    x: '30px',
    y: '30px',
    tick: 5
  },
};