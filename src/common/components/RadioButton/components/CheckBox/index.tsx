import React from 'react';
import { Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { checkboxColor } from 'res/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
      circleScaleValue: new Animated.Value(0)
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
    Animated.timing(this.state.circleScaleValue, {
      toValue: 12,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  animateNotComplete() {
    Animated.timing(this.state.circleScaleValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  render() {
    return(
      <Svg
        height={40}
        width={40} >
        <Circle 
          cx="20"
          cy="20"
          r="12"
          fillOpacity="0.0"
          strokeWidth="1"
          strokeOpacity="1.0"
          stroke={checkboxColor.circle}
        />
        <AnimatedCircle
          cx="20"
          cy="20"
          r={this.state.circleScaleValue}
          fillOpacity="1.0"
          fill={checkboxColor.circle}
        />
      </Svg>
    );
  }
}

export default Checkbox;