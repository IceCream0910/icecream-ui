import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '..';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    componentSubtitle: "그저 평범한 박스일 뿐이에요.",
    docs: {
      description: {
        component: `카드 컴포넌트입니다. 카드 스타일과 색상을 변경할 수 있습니다. \`clickable\` 옵션을 사용하여 클릭 이벤트 및 효과를 추가할 수 있습니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    clickable: { control: { type: 'boolean' } },
    cardType: {
      control: { type: 'radio', options: ['filled', 'outlined', 'transparent'] },
    },
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'danger'] },
    },
    width: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Filled: Story = {
  args: {
    cardType: 'filled',
    variant: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    cardType: 'outlined',
    variant: 'primary',
  },
};

export const Transparent: Story = {
  args: {
    cardType: 'transparent',
  },
};
