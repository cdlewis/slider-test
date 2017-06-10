import React from 'react'
import {ScrollView, View} from 'react-native'

export default class Slider extends React.PureComponent {
  state = {
    width: 0,
    height: 0,
  }

  saveRef = ref => this.scrollViewRef = ref;

  setDimensions = ({nativeEvent: {layout: {height, width}}}) => this.setState({height, width})

  componentWillReceiveProps(nextProps) {
    const x = this.state.width * nextProps.selectedTab;
    this.scrollViewRef && this.scrollViewRef.scrollTo({x});
  }

  handlePageChange = ({nativeEvent: {contentOffset}}) => {
    const currentTab = Math.round(contentOffset.x / this.state.width);
    if (this.props.currentTab !== currentTab) {
      this.props.onChange(currentTab);
    }
  }

  render() {
    const childStyle = {
      flex: 1,
      height: this.state.height,
      width: this.state.width,
    };

    return (
      <ScrollView
        horizontal={true}
        onLayout={this.setDimensions}
        onMomentumScrollEnd={this.handlePageChange}
        pagingEnabled={true}
        ref={this.saveRef}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
      >
        {React.Children.map(this.props.children, child => React.cloneElement(child, {
          style: [child.props.style, childStyle],
        }))}
      </ScrollView>
    )
  }
}
