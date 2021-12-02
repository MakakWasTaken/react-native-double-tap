import React = require('react')
import { TouchableOpacity } from 'react-native'

export interface DoubleTapProps {
  singleTap?: () => void
  doubleTap?: () => void
  delay?: number
}

export const DoubleTap: React.FC<DoubleTapProps> = (props) => {
  const delayTime = props.delay || 150
  const [firstPress, setFirstPress] = React.useState(true)

  // the last time user tapped
  const [lastTime, setLastTime] = React.useState(new Date().getTime())

  const timer = React.useRef<number>()

  React.useEffect(() => {
    return () => {
      // make sure to clear the timer when unmounting
      timer.current && clearTimeout(timer.current)
    }
  }, [])

  const onTap = () => {
    // get the instance of time when pressed
    const now = new Date().getTime()

    if (firstPress) {
      // set the flag indicating first press has occured
      setFirstPress(false)

      // start a timer --> if a second tap doesnt come in by the delay, trigger singleTap event handler
      timer.current = setTimeout(() => {
        // check if user passed in prop
        props.singleTap && props.singleTap()

        // reset back to initial state
        setFirstPress(true)
        timer.current = undefined
      }, delayTime)

      // mark the last time of the press
      setLastTime(now)
    } else {
      // if user pressed immediately again within span of delayTime
      if (now - lastTime < delayTime) {
        // clear the timeout for the single press
        timer.current && clearTimeout(timer.current)

        // check if user passed in prop for double click
        props.doubleTap && props.doubleTap()

        // reset back to initial state
        setFirstPress(true)
      }
    }
  }

  return <TouchableOpacity onPress={onTap}>{props.children}</TouchableOpacity>
}
