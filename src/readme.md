# Rate Colors & React Context

the porpuse of this app was to practice some of the react features, primarily context and hooks, separating concerns and custom hooks

## Context API

the first version of this [simple app](https://codesandbox.io/s/colors-n4r34i?file=/src/Color.js) i used prop drilling to hidratated the components, i put all the states and functions in the parent component relative to all the childs, this worked but proved to be messy, even difficult to understand for me after drilling more than 3 levels, this looked like a good application to practice the context API, whose purpose is to avoid the prop drilling and acces directly to a space in your app where all the states and functions are being hold

while props drilling is like if the information is using the highway going through town to town until reaching the delivery point the context api works more like a plane, that goes directly to the desired destiny

### whats is the context API

contexts allow us to create a individual space in our app that contains all the states and interaction related to this states in a separate space in our app, which we can acces to in any Provided part of our application

### how i make context work

- first of all we need to use the createContext function that react provide us to subscribe our context to our app

```js
import { createContext, useState } from "react";

const ColorContext = createContext({ item: 1 });
```

- then i created HOC thats gonna be the provider of our all the components wrapped in him (his children) also is where all the logic and states of our app are and we use the value prop to send then through our childs

```js
export function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  {...}
  return (
    <ColorContext.Provider
      value={{ colors ...}}
    >
      {children}
    </ColorContext.Provider>
  );
}
```

- then we need to wrappe the app (or the desired components) with our provider

```js
import { ColorProvider } from "./context/ColorContext";

export default function App() {
  return (
    <div className="App">
      <ColorProvider>
        <ColorList />
        <AddNewColor />
      </ColorProvider>
    </div>
  );
}
```

- now we can access all the values of our provider in any component that a child of the ColorProvider component thanks to the use of the hook "useContext("ColorContext")" we can acces to the context that the components are suscribed to

* because in this app the subscriber is being exported by default we dont use curly braces wen we call the context (but we do need then for the provider)

```js
import ColorContext from "../context/ColorContext";
```

but we can avoid to access the subscriber from every component by creating a custom hook who does it, that why i created useColor, to hace access to the subscriber without exposing it

```js
import { useContext } from "react";
import ColorContext from "../context/ColorContext";

export const useColor = () => useContext(ColorContext);
```

## adventages of using Context API

by separating the logic of the user interface we can develop and test both of them individually and by interacting with our states in the context and only provide the functions that change it we can make sure that the user only does what we allow it to t also reduce the code complexity of our code making ir more readable
