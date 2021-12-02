# makakwastaken/react-native-double-tap

## Credit

Forked from [awshawka/react-native-double-tap](https://github.com/awshawka/react-native-double-tap)

A wrapper component for React Native which supports both double and single tap. Works on both Android and iOS.

## Installation

- `npm install --save makakwastaken/react-native-double-tap`

or

- `yarn add makakwastaken/react-native-double-tap`

## Usage

### Class

```js
export default class App extends React.Component {
  render() {
    return (
      <View>
        <DoubleClick
          singleTap={() => {
            console.log('single tap')
          }}
          doubleTap={() => {
            console.log('double tap')
          }}
          delay={200}
        >
          <Button title="Single or Double Tap" />
        </DoubleClick>
      </View>
    )
  }
}
```

### Functional

```js
const App: React.FC = () => {
  return (
    <View>
      <DoubleClick
        singleTap={() => {
          console.log('single tap')
        }}
        doubleTap={() => {
          console.log('double tap')
        }}
        delay={200}
      >
        <Button title="Single or Double Tap" />
      </DoubleClick>
    </View>
  )
}
```

## Props

| Property  | Type     | Default | Description                   |
| --------- | -------- | ------- | ----------------------------- |
| delay     | number   | 200     | Time for delay between taps   |
| singleTap | function | null    | callback for single tap event |
| doubleTap | function | null    | callback for double tap event |

## License

MIT
