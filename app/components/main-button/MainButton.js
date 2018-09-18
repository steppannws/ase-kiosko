import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
// import { colors } from '../../theme';

/**
 * Description
 * @author ?
 * @class ButtonMain
 */
export default class MainButton extends Component {
  /**
   * Definition of the prop types
   */
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    onPressOpacity: PropTypes.number,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['normal', 'warning', 'error']),
    style: PropTypes.any,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  /**
   * Default Props
   */
  static defaultProps = {
    onPressOpacity: 0.8,
    style: null,
    disabled: false,
    isLoading: false,
    type: 'normal'
  };

  // constructor(props){
  //   super(props)
  // }

  render() {
    const touchableProps = {
      // onPress: this.handlePress,
      // disabled,
      // disabledBlueBG,
    };

    const {
      onPress,
      onPressOpacity,
      text,
      style,
      disabled,
      isLoading,
      type
    } = this.props;

    return (
      <div className={styles.container} onClick={onPress}>
        {text}
        {/* <Touchable
          background={Touchable.Ripple(null, true)}
          onPressOpacity={onPressOpacity}
          onPress={onPress}
          disabled={disabled}
          {...touchableProps}
        > */}
        {/* <View style={[main.wrapper, main[type], disabled && main.disabled]}>
            {!isLoading ? (
              <Animatable.Text animation="fadeIn" duration={500} style={main.text}>
                {text}
              </Animatable.Text>
            ) : (
              <Animatable.View animation="fadeIn" duration={500}>
                <ActivityIndicator color={colors.WHITE} size="small" />
              </Animatable.View>
            )}
          </View> */}
        {/* </Touchable> */}
      </div>
    );
  }
}
