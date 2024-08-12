"use client";
import Spacer from '../../../elements/spacer';
import Button from '../../../elements/button';
import Card from '../../../elements/card';
import Checkbox from '../../../elements/checkbox';
import Chip from '../../../elements/chip';
import Input from '../../../elements/input';
import Label from '../../../elements/label';
import TitleBar from '../../../elements/title-bar';
//import { Vert, Horz } from '../../../elements/flex';

const MyPage = () => {
  return (
    <main>
      <TitleBar title="icecream-ui">
        <Button type="accent" onClick={() => window.open('https://www.npmjs.com/package/@icecream0910/ui', '_blank')}>
          설치
        </Button>
      </TitleBar>
      <Spacer y={60} />

      <Label title="Button" description="그저 버튼일 뿐이에요." />
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <Button type="accent">
          accent
        </Button>
        <Button type="secondary">
          secondary
        </Button>
        <Button type="danger">
          danger
        </Button>
      </div>
      <Spacer y={10} />
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <Button type="ghost">
          ghost
        </Button>
        <Button loading>
          loading
        </Button>
      </div>

      <Spacer y={40} />

      <Label title="Chip" description="안촉촉한 초코칩 나라에 살던 안촉촉한 초코칩" />

      <Chip>초코칩</Chip>
      <Chip>딸기칩</Chip>
      <Chip>포카칩</Chip>


      <Spacer y={40} />

      <Label title="Input" description="무엇이든 쓸 수 있어요." />
      <Input placeholder="텍스트를 입력하세요" />
      <Spacer y={20} />
      <Label title="" description="Date Picker" message="input 아래 메시지를 표시할 수 있어요">
        <Input type="date" />
      </Label>

      <Spacer y={40} />
      <Card>
        <Label title="Card" description="무엇이든 담아보세요." />
      </Card>


      <Spacer y={40} />

      <Label title="체크박스" description="외모 췍">
        <Checkbox />
      </Label>

      <Spacer y={40} />
    </main>
  );
};

export default MyPage;