import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
        alignItems: 'center'
    },

    logo: {
        marginTop: 40,

    },

    inputContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 32,
    },

    input: {
        flex: 1,
        height: 52,
        backgroundColor:'#262626',
        borderRadius: 6,
        color: '#F2F2F2',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        padding: 16,
        borderColor: 'transparent',
        borderWidth: 1,
        marginRight: 4
        
    },

    inputFocus: {
        flex: 1,
        height: 52,
        backgroundColor:'#262626',
        borderRadius: 6,
        color: '#F2F2F2',
        fontSize: 16,
        padding: 16,
        borderColor: '#5E60CE',
        borderWidth: 1,
        marginRight: 4
        
    },

    button: {
        width: 52,
        height: 52,
        padding: 18,
        borderRadius: 6,
    },

    buttonIcon: {
        width: 16,
        height: 16,
        backgroundColor: 'F2F2F2',
    },

    list: {
        flex: 1,
        width: '100%'
    },

    tasksContainer: {
        alignItems: 'center',
        borderTopColor: '#333333',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderWidth: 1,
    },

    tasksContainerChecked: {
        alignItems: 'center',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderWidth: 1,
    },

    emptyTitle: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#808080',
        marginTop: 16
    },
    emptyText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#808080',
        marginTop: 4
    },

    countBox: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between'
    },

    countContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    countTasksCreated: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        linHeight: 17,
        marginRight: 8,
        color: '#4EA8DE'
    },

    countTasksCompleted: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        linHeight: 17,
        marginRight: 8,
        color: '#8284FA'
    },

    countNumber: {
        fontFamily: 'Inter_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        linHeight: 17,
        color: '#D9D9D9',

    },
    countNumberBg: {
        backgroundColor: '#333333',
        width: 25,
        height: 19,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})