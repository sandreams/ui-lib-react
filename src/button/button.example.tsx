import React from 'react';
import Button from './index';
import Icon, { IconName } from 'src/icon';

interface TestProp {
  aaa: string;
}
const tp: TestProp = <Icon name={IconName.money} />;
const ButtonExample: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }}>OutLine</Button>
        <Button style={{ marginRight: '20px' }} type="fill">
          Fill
        </Button>
        <Button style={{ marginRight: '20px' }} type="ghost">
          Ghost
        </Button>
        <Button type="link">Link</Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="primary">
          OutLine
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill">
          Fill
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="ghost">
          Ghost
        </Button>
        <Button colorSchema="primary" type="link">
          Link
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="success">
          OutLine
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="success" type="fill">
          Fill
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="success" type="ghost">
          Ghost
        </Button>
        <Button colorSchema="success" type="link">
          Link
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="error">
          OutLine
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="error" type="fill">
          Fill
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="error" type="ghost">
          Ghost
        </Button>
        <Button colorSchema="error" type="link">
          Link
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="warning">
          OutLine
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="warning" type="fill">
          Fill
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="warning" type="ghost">
          Ghost
        </Button>
        <Button colorSchema="warning" type="link">
          Link
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill" size="xs">
          xs
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill" size="sm">
          sm
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill" size="md">
          md
        </Button>
        <Button colorSchema="primary" type="fill" size="lg">
          lg
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill" size="md" iconLeft={IconName.check}>
          Left
        </Button>
        <Button
          style={{ marginRight: '20px' }}
          colorSchema="primary"
          size="md"
          iconLeft={IconName.check}
          iconRight={IconName.search}
        >
          Both
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" type="fill" size="md" iconRight={IconName.check}>
          Right
        </Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button
          style={{ marginRight: '20px' }}
          colorSchema="primary"
          type="fill"
          size="md"
          disabled
          iconRight={IconName.check}
        >
          Disabled
        </Button>
        <Button
          style={{ marginRight: '20px' }}
          colorSchema="primary"
          type="fill"
          size="md"
          loading
          iconLeft={IconName.check}
        >
          Disabled
        </Button>
        <Button style={{ marginRight: '20px' }} colorSchema="primary" size="md" disabled iconRight={IconName.close}>
          Disabled
        </Button>
        <Button
          style={{ marginRight: '20px' }}
          colorSchema="primary"
          size="md"
          loading
          iconLeft={IconName.close}
          loadingText="加载中..."
        >
          Disabled
        </Button>
      </div>
    </section>
  );
};
export default ButtonExample;
