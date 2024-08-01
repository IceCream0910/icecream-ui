import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    componentSubtitle: "체크 없는 체크 박스",
    docs: {
      description: {
        component: `심플한 체크박스 컴포넌트입니다. 체크박스 스타일과 색상을 변경할 수 있습니다.<br/>
        아래와 같이 state를 사용하여 체크박스의 상태를 변경할 수 있습니다.

        const App = () => {
          const [checked, setChecked] = useState(false);

          return (
            <Checkbox
              variant="primary"
              label="This is a checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          );
        };
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'danger'] },
    },
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    onChange: {
      action: 'onChange',
    },
  },
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'This is a checkbox',
    checked: true,
  },
};