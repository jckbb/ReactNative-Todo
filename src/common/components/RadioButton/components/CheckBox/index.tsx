import React from 'react';
import { Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { checkboxColor } from 'res/colors';

interface Props {
  readonly complete: Boolean
};

interface State {
  circleScaleValue: Animated.Value
}

class Checkbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      circleScaleValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    if (this.props.complete)
      this.animateComplete();
  }

  componentDidUpdate(prevProps: Props) {
    if(this.props.complete === prevProps.complete)
      return;

    if(this.props.complete)
      this.animateComplete();
    else
      this.animateNotComplete();
  }

  animateComplete() {
    Animated.spring(this.state.circleScaleValue, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true
    }).start();
  }

  animateNotComplete() {
    Animated.spring(this.state.circleScaleValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true
    }).start();
  }

  render() {
    const circleScale =  this.state.circleScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.2]
      });

    const circleOpacity = this.state.circleScaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

    return(
      <Animated.View
        style={{ transform: [{
          scale: circleScale
        }], opacity: circleOpacity}} >
        <Svg
         height={40}
         width={40} >
          <Circle
            cx="20"
            cy="20"
            r="14"
            fillOpacity="1.0"
            fill={checkboxColor.circle}
          />
        </Svg>
      </Animated.View>
    );
  }
}

export default Checkbox;