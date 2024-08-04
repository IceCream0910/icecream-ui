import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: "그저 버튼일 뿐이에요.",
    docs: {
      description: {
        component: `마우스 호버 효과와 클릭 효과가 있는 버튼입니다. 버튼 스타일과 색상을 변경할 수 있습니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio', options: ['filled', 'outlined', 'transparent'] },
    },
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'danger'] },
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'object' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    type: 'filled',
    variant: 'primary',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    variant: 'primary',
    children: 'Button',
  },
};

export const Transparent: Story = {
  args: {
    type: 'transparent',
    children: 'Button',
  },
};