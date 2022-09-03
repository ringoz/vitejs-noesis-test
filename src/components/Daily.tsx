import { useState } from 'react';
import DailyItem from './DailyItem';
import { DailyWeatherModel, SettingsModel } from '../models';
import { DailyItemDetails } from './DailyItemDetails';
import {
  FontWeight,
  HeaderedContentControl,
  StackPanel,
  TextBlock,
  Visibility,
} from '@ringozz/react-noesis';

type DailyProps = {
  settings: SettingsModel;
  data: DailyWeatherModel;
};

export const Daily = ({ settings, data }: DailyProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (d: any) => {
    if (d.dt === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(d.dt);
    }
  };
  return (
    <HeaderedContentControl Margin={8}>
      <HeaderedContentControl.Header>
        <TextBlock FontSize={24} FontWeight={FontWeight.Bold}>
          Daily
        </TextBlock>
      </HeaderedContentControl.Header>
      <StackPanel Margin={4}>
        {data.daily.map((d) => (
          <StackPanel key={d.dt}>
            <DailyItem
              settings={settings}
              data={d}
              onClick={() => clickHandler(d)}
            ></DailyItem>
            <StackPanel Visibility={Visibility.Collapsed}>
              <DailyItemDetails data={d}></DailyItemDetails>
            </StackPanel>
          </StackPanel>
        ))}
      </StackPanel>
    </HeaderedContentControl>
  );
};

export default Daily;
