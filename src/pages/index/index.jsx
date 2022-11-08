import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    },
  })
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  async clickHandle() {
    await this.props.add()
    await this.props.add()
    console.log(
      '🚀 ~ file: index.jsx ~ line 37 ~ Index ~ clickHandle ~ add',
      this.props.counter
    )
  }

  render() {
    return (
      <View className='index'>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View onClick={this.clickHandle.bind(this)}>
          <Text>Hello, World</Text>
        </View>
      </View>
    )
  }
}

export default Index
