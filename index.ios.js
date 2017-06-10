import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Slider from './slider';

export default class app extends React.PureComponent {
  state = {
    currentTab: 0,
  }

  onChange = currentTab => this.setState({currentTab});

  render() {
    return (
      <View style={{flex: 1}}>
        <Slider selectedTab={this.state.currentTab} onChange={this.onChange}>
          <View style={{backgroundColor: 'green'}} />
          <View style={{backgroundColor: 'red'}} />
          <View style={{backgroundColor: 'blue'}} />
        </Slider>
        <View>
          <TouchableOpacity onPress={() => this.setState({currentTab: 0})}><Text>{'Tab 1'}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentTab: 1})}><Text>{'Tab 2'}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentTab: 2})}><Text>{'Tab 3'}</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('slider', () => app);
