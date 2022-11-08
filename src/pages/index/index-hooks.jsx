import { View, Text } from '@tarojs/components'
import React, { useState, useEffect } from 'react'
import { add, minus, asyncAdd } from '../../actions/counter'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'

const Index = () => {
  useEffect(() => {}, [])

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const [num, setNum] = useState(0)

  const clickHandle = async () => {
    setNum((pre) => pre + 1)
    setNum((pre) => pre + 1)
    addOneMore()
  }

  const addOneMore = () => {
    setNum((pre) => pre + 1)
  }

  useEffect(() => {
    console.log('🚀 ~ file: index.jsx ~ line 20 ~ useEffect ~ useEffect', num)
  }, [num])

  /*  const clickHandle = async () => {
    await dispatch(add())
    await dispatch(add())
    addOneMore()
  }

  const addOneMore = () => {
    dispatch(add())
  }

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.jsx ~ line 20 ~ useEffect ~ useEffect',
      counter.num
    )
  }, [counter.num]) */

  return (
    <View className='index'>
      <View>
        <Text>{counter.num}</Text>
      </View>
      <View onClick={clickHandle}>
        <Text>Hello, World</Text>
      </View>
    </View>
  )
}

export default Index
