import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';

// CustomDrawerHeaderProps for passing values to the child
interface CustomDrawerHeaderProps {
    navigation: any;
    title: string;
    showRefresh?: boolean; // Prop to control whether to show the refresh button
    showFamilyButton?: boolean; // Prop to control whether to show the Family button
    onRefresh?: () => void; // Callback function for refreshing
}

const CustomDrawerHeader: React.FC<CustomDrawerHeaderProps> = ({
    navigation,
    title,
    showRefresh = true,
    showFamilyButton = true,
    onRefresh,
}) => {
    const { openDrawer } = navigation;
    const { theme } = useTheme();
    const { label, button, background } = theme.colors;
    const [refreshing, setRefreshing] = useState(false);

    const handleRefreshPress = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            if (onRefresh) {
                onRefresh();
            }
        }, 3000);
    };

    return (
        <View style={[styles.row, { backgroundColor: background }]}>
            <View style={styles.leftDrawer}>
                <TouchableOpacity onPress={openDrawer}>
                    <IconButton icon="menu" size={25} iconColor={button} />
                </TouchableOpacity>
                <Text style={{ color: label, fontWeight: '400', fontSize: 19 }}>{title}</Text>
            </View>

            <View style={styles.rightDrawer}>
                {showRefresh && (
                    <View style={{ marginRight: 10 }}>
                        {refreshing ? (
                            <ActivityIndicator animating={true} color={button} size={25} style={{ margin: null, marginRight: 10 }} />
                        ) : (
                            <TouchableOpacity onPress={handleRefreshPress}>
                                <IconButton icon="refresh" size={25} iconColor={button} style={{ margin: null }} />
                            </TouchableOpacity>
                        )}
                    </View>
                )}

                {showFamilyButton && (
                    <TouchableOpacity onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
                        <IconButton icon="account-group" size={18} iconColor='#fff' style={{ margin: null, borderRadius: 50, backgroundColor: button }} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomDrawerHeader;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftDrawer: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightDrawer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 10
    }
})