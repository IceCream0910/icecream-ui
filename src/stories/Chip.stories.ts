import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Chip } from '..';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    componentSubtitle: "그저 칩일 뿐이에요.",
    docs: {
      description: {
        component: `~~초코 칩 아님~~ \`clickable\` 옵션을 사용하여 클릭 이벤트 및 효과를 추가할 수 있습니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    clickable: { control: { type: 'boolean' } },
    chipType: {
      control: { type: 'radio', options: ['filled', 'outlined', 'transparent'] },
    },
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'danger'] },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    chipType: 'filled',
    variant: 'primary',
    children: 'Item',
  },
};

export const Outlined: Story = {
  args: {
    chipType: 'outlined',
    variant: 'primary',
    children: 'Item',
  },
};