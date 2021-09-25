import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [describe, setDescribe] = useState();
  function addTask(){
    // db.push({
    //     title:task,
    //     description:describe,
    //     complete:false
    // })
    setTask('')
    setDescribe('')
    console.log(task," : ",describe)
}
  return (
    <View style={styles.container}>
      <Text>Upload </Text>
      <TextInput label={"New Task"}
        value={task}
        onChangeText={setTask}
      />
      <TextInput label={"Describe"}
        value={describe}
        onChangeText={setDescribe}
      />
      <Button onPress={() => { addTask() }}>Add task</Button>
      {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        /> */}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
