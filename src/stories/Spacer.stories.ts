import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Spacer } from '..';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
    componentSubtitle: "가로 및 세로 간격을 추가할 수 있습니다.",
    docs: {
      description: {
        // 추가
        component: `개별 요소에 margin이나 padding을 추가하거나 \`<br/>\` 태그를 사용하는 대신, \`Spacer\` 컴포넌트를 사용하여 간격 또는 줄바꿈을 추가할 수 있습니다.`,
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
type Story = StoryObj<typeof Spacer>;

export const VerticalSpacer: Story = {
  args: {
    y: '50px',
  },
};

export const HorizontalSpacer: Story = {
  args: {
    x: '50px',
  },
};