import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from '..';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    componentSubtitle: "텍스트를 입력할 수 있는 input 컴포넌트",
    docs: {
      description: {
        component: `아래와 같이 \`state\`와 \`onChange\` 이벤트를 사용하여 input의 값을 확인하고 변경할 수 있습니다.

        const App = () => {
          const [value, setValue] = useState('');

          return (
            <Input
              variant="primary"
              placeholder="텍스트 입력"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          );
        };
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: { type: 'radio', options: ['filled', 'outlined', 'transparent'] },
    },
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'danger'] },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
  },
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Filled: Story = {
  args: {
    inputType: 'filled',
    variant: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    variant: 'primary',
  },
};

export const Transparent: Story = {
  args: {
    type: 'transparent',
  },
};
