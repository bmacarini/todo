import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export type Props = {
    text: string;
    onRemove: () => void;
    onCheck: () => void;
}

export function
    Task({ text, onRemove, onCheck }: Props) {

    const [checked, setChecked] = useState(false);

    const taskTextChecked = checked ? styles.taskChecked : styles.taskText;

    const taskContainerChecked = checked ? styles.taskContainerChecked : styles.taskContainer;

    const iconName = checked ?
        'check-circle' : 'radio-button-unchecked';

    const iconColor = checked ?
        "#5E60CE" : "#4EA8DE";

    return (
        <View style={taskContainerChecked}>
            <View>
                <Pressable
                    onPress={() => setChecked(!checked)}
                    onPressOut={onCheck}
                >
                    <MaterialIcons
                        name={iconName}
                        color={iconColor}
                        size={24}
                    />
                </Pressable>
            </View>
            <Text style={taskTextChecked}>
                {text}
            </Text>
            <MaterialIcons
                name='delete'
                size={24}
                color='#808080'
                onPress={onRemove}
            />
        </View>
    )
}