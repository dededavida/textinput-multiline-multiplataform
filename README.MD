<h1 align="center">Text Input Multiline Multiplataform</h1>

<p align="center">
Project created in order to present a solution when using a TextInput `multine`, to many issues related to these problems that happen within IOS, because the` TextAlignVertical` property does not work as it should in it.
</p>

### Expo Snack

https://snack.expo.io/@david896/textinputmultilinemultiplataform

<p align="center">
 <a href="https://www.linkedin.com/in/daviddossantoscruz/">
    <img alt="Made by DavidCruz" src="https://img.shields.io/badge/made%20by-daviddossantos-%2304D361">
  </a>
<img src="https://img.shields.io/github/stars/daviddossantos/textinput-multiline-multiplataform">
<img src="https://img.shields.io/github/license/daviddossantos/textinput-multiline-multiplataform">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/daviddossantos/textinput-multiline-multiplataform">

</p>

<h4 align="center">Text Input Multiline Multiplataform, finished 🚀 </h4>

### 🔨 Usage

To achieve the same effect, you can wrap your TextInput in a View

```javascript
const TextInputMultiline = (props) => {
  //instead of using `numberOfLines`, we will use `maxHeight` inside the View to specify the maximum size of the same
  return (
    //define style of your TextInput inside the View
    <View style={{ maxHeight: 150, backgroundColor: "#fff", padding: 15 }}>
      //remove paddingTop for correct the question the positioning
      <TextInput {...props} style={{ paddingTop: 0 }} />
    </View>
  );
};
```

```javascript
<TextInputMultiline
  placeholder="Type something cool"
  placeholderTextColor="#fff"
  multiline
  onChangeText={(text) => onChangeText(text)}
  value={value}
/>
```

---

Feito com ❤️ by David Cruz
