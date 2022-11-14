import React, { useState } from 'react';
import { View, Image, TextInput, Pressable, FlatList, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { taskProps } from '../types'
import { styles } from './style';
import { Task } from '../components/Task';

export function Home() {

    const [inputFocus, setInputFocus] = useState(false);
    const customStyle = inputFocus ? styles.inputFocus : styles.input;

    const [listTasks, setListTasks] = useState<taskProps[]>([]);
    const [task, setTask] = useState('');

    const [taskCount, setTaskCount] = useState(0);
    const [taskCompletedCount, setTaskCompletedCount] = useState(0);
    
    const [removeLine, setRemoveLine] = useState(false);
    const isTaskAdded = removeLine ? styles.tasksContainerChecked : styles.tasksContainer;

    function handleTaskAdd() {
        setListTasks([...listTasks, {
            text: task,
            checked: false
        }])
        setRemoveLine(true)
        setTaskCount(taskCount + 1)
        setTask('');
    };

    function handleRemoveTask(text: string) {
        const tasksRemain = listTasks.filter(task => task.text !== text)

        Alert.alert('Quer mesmo excluir a tarefa a seguir?', `'${text}'`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => [
                    setListTasks([...tasksRemain]),
                    setTaskCount(task => {
                        return task - 1
                    }),
                    taskCompleted(tasksRemain)
                ]
            }
        ]);
    };


    function handleCheckedTask(text: string) {
        const isTaskChecked = listTasks.map(task => {
            if (task.text == text) {
                task.checked = !task.checked
            }
            return task
        })

        setTaskCompletedCount(isTaskChecked.length)

        taskCompleted(isTaskChecked)
    }

    function taskCompleted(listTasks: taskProps[]) {
        const result = listTasks.filter(task => task.checked === true)
        setTaskCompletedCount(result.length)
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/Logo.png')}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    style={customStyle}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                    onChangeText={setTask}
                    value={task}
                />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#4EA8DE'
                                : '#1E6F9F'
                        },
                        styles.button
                    ]}
                    onPress={handleTaskAdd}
                >

                    <MaterialIcons
                        name='add-circle-outline'
                        size={16}
                        color='#F2F2F2'
                    />
                </Pressable>
            </View>
            <View style={styles.countBox}>
                <View style={styles.countContainer}>
                    <Text style={styles.countTasksCreated}>
                        Criadas
                    </Text>
                    <View style={styles.countNumberBg}>
                        <Text style={styles.countNumber}>
                            {taskCount}
                        </Text>
                    </View>
                </View>
                <View style={styles.countContainer}>
                    <Text style={styles.countTasksCompleted}>
                        Concluídas
                    </Text>
                    <View style={styles.countNumberBg}>
                        <Text style={styles.countNumber}>
                            {taskCompletedCount}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={listTasks}
                    keyExtractor={item => item.text}
                    contentContainerStyle={isTaskAdded}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Task
                            key={item.text}
                            text={item.text}
                            onRemove={() => handleRemoveTask(item.text)}
                            onCheck={() => handleCheckedTask(item.text)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <>
                            <MaterialIcons
                                name='assignment'
                                size={56}
                                color='#333333'
                                style={{ marginTop: 48 }}
                            />
                            <Text style={styles.emptyTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyText}>
                                Crie tarefas e organize seus itens a fazer.
                            </Text>
                        </>
                    )}
                />
            </View>
        </View>
    )
}