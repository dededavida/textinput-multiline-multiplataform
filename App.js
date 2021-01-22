import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
} from 'react-native';

//to achieve the same effect, you can wrap your TextInput in a View
const TextInputMultiline = (props) => {
  //remove paddingTop for correct the question the positioning
  return (
    <View style={styles.input}>
      <TextInput {...props} style={{ paddingTop: 0 }} />
    </View>
  );
};

const TextInputMultilineMultiplataform = () => {
  const [value, onChangeText] = React.useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Example de TextInput multine align correctly!
        </Text>
        <TextInputMultiline
          placeholder="Type something cool"
          placeholderTextColor="#fff"
          multiline
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EB4C49',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  input: {
    maxHeight: 150,
    backgroundColor: '#9849EB',
    width: '100%',
    padding: 15,
  },
  text: { color: '#fff', marginBottom: 10 },
});

export default TextInputMultilineMultiplataform;
