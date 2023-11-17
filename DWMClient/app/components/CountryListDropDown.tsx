import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {store} from '../store';
import Icon from 'react-native-vector-icons/FontAwesome';
interface CountryListProps {
  sourceData: Array<{country: string; code: string; id: string}>;
  selectedCode?: (item: string) => void;
  selectId?: (item: string) => void;
  setShow: (show: boolean) => void;
}

type ItemKeys = {country: string; code: string; id: string};

const CountryListDropDown: React.FC<CountryListProps> = ({
  sourceData,
  selectedCode = () => {},
  selectId = () => {},
  setShow = () => {},
}) => {
  // const countryList = [
  //   {country: 'Bharat', code: '91', id: '0001'},
  //   {country: 'SriLanka', code: '92', id: '0002'},
  //   {country: 'China', code: '93', id: '0003'},
  //   {country: 'Rassia', code: '94', id: '0004'},
  //   {country: 'America', code: '95', id: '0005'},
  //   {country: 'Bharat', code: '91', id: '0006'},
  //   {country: 'SriLanka', code: '92', id: '0007'},
  //   {country: 'China', code: '93', id: '0008'},
  //   {country: 'Rassia', code: '94', id: '0009'},
  //   {country: 'America', code: '95', id: '0010'},
  // ];

  var countryList: {country: string; code: string; id: string}[] = [];
  const cData = store.getState().country;
  countryList = [];

  console.log(cData.responseListObject.length);

  for (let i = 0; i < cData.responseListObject.length; i++) {
    var obj = cData.responseListObject[i];

    countryList.push({
      code: `${obj.mappedValue1}`,
      country: `${obj.codeValue}`,
      id: `${obj.codeValueId}`,
    });
  }

  console.log('updated Country Arr:', countryList.length);
  // setData(countryList);

  const [selectionTxt, setSelectionTxt] = useState('+91');
  const [isClick, setIsClick] = useState(true);
  const [data, setData] = useState(countryList);
  const [selectedId, setSelectedId] = useState('');

  // const searchRef = useRef<TextInput>();

  const onSearch = (txt: string) => {
    if (txt !== '') {
      let tempData = countryList.filter(item => {
        let str = item.country.toLowerCase() + item.code;
        return str.indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countryList);
    }
  };

  const onListItemClick = (i: number) => {
    selectedCode(data[i].code);
    selectId(data[i].id);
    setShow(false);
    setIsClick(false);
    onSearch('');
  };

  return (
    <>
      <TouchableOpacity
        style={styles.Maincontainer}
        onPress={() => {
          // setIsClick(!isClick);
          setShow(false);
        }}>
        <View style={styles.container}>
          {isClick ? (
            <View style={styles.dropdownView}>
              <View style={styles.searchInputView}>
                <View style={styles.searchIcon}>
                  <Icon name="search" size={15} color="gray" />
                </View>
                <TextInput
                  // ref={searchRef}
                  style={styles.searchInput}
                  placeholder="Search"
                  onChangeText={txt => {
                    onSearch(txt);
                  }}></TextInput>
              </View>
              <FlatList
                style={styles.list}
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() => {
                        onListItemClick(index);
                        // searchRef.
                      }}>
                      <Text style={styles.listItemText}>{item.country}</Text>
                      <Text style={styles.listItemText}>+{item.code}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CountryListDropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Maincontainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dropdownSelection: {
    width: '90%',
    height: 50,
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 100,
  },
  countryTxt: {
    margin: 10,
    backgroundColor: 'lightblue',
  },
  dropdownView: {
    width: '90%',
    height: 450,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  searchInputView: {
    width: '90%',
    height: 50,
    borderBottomColor: '#8e8e8e',
    borderBottomWidth: 0.2,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    width: '90%',
    margin: 5,
    height: 40,
  },
  list: {
    // backgroundColor: 'lightblue',
  },
  listItem: {
    width: '80%',
    height: 40,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listItemText: {
    margin: 10,
  },
});
