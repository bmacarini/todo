import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        borderColor: '#333333',
        borderWidth: 2
    },

    taskContainerChecked: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        borderColor: '#262626',
        borderWidth: 2
    },

    taskText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#F2F2F2',
        marginLeft: 8,
        marginRight: 8,
        flex: 1
    },

    taskChecked: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#808080',
        marginLeft: 8,
        marginRight: 8,
        flex: 1,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
    
})