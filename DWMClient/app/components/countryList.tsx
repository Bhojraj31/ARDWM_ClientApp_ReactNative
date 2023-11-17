import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
// import { ListItem } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface CountryListProps {
  placeHolder: string;
  sourceData: Array<{}>;
  onSelect?: () => void,
}

type ItemKeys = { key?: any; value?: any; disabled?: boolean | undefined }

const CountryList: React.FC<CountryListProps> = ({
  placeHolder,
  sourceData,
  onSelect = () => { },
}) => {

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(sourceData);

  const itemClicked = () => {
    onSelect()
  }
  console.log('arr mila', filteredData)
  // const filteredData = sourceData.filter(item => item.value.toLowerCase().includes(search.toLowerCase()));

  return (
    <View>
      <TextInput
        placeholder={placeHolder}
        value={search}
        // onChangeText={(text) => setSearch(text)}
        onChangeText={(val) => {
          let result = sourceData.filter((item: ItemKeys) => {
            val.toLowerCase();
            let row = item.value.toLowerCase()
            return row.search(val.toLowerCase()) > -1;
          });
          setFilteredData(result)
        }}
        style={{ height: 50, marginHorizontal: 5, marginVertical: 5, borderWidth: 1, paddingHorizontal: 5, borderColor: 'grey', borderRadius: 10 }}
      />
      <FlatList
        style={{ height: 350, marginHorizontal: 10 }}
        data={filteredData}
        keyExtractor={(item: ItemKeys) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => itemClicked}>
            <Text>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CountryList;