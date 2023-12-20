import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import { Text, View } from 'react-native';

const Items = Array.from(Array(26).keys());

const rednerItem = (item: any) => (
    <Text style={{ fontSize: 28, color: 'grey', paddingHorizontal: 10, borderRightWidth: 0.5, borderLeftWidth: 0.5 }} >
        {item}
    </Text>
);
// ------ React Native Funcational Export Component with styles------
export const CustomHorizontalPicker = () => (
    // ------ HorizontalPicker here ------ 
    <HorizontalPicker
        data={Items}
        renderItem={rednerItem}
        itemWidth={80}
        contentContainerStyle={{ height: 100 }}
        style={{ width: 135, height: 24, alignSelf: 'center'}}
        defaultIndex={10}
        onChange={(position) => console.log(position)}
        
    />
);
