import React, {Component} from 'react'
import axios from 'axios'
import { API } from '../utils/const'
export default class List extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: null
    }
  }
  async componentDidMount(){
    const fetchData = async () => {
      return axios.get(API).catch(err => console.error(err))
    }
    fetchData().then(result => {
      this.setState({data:result.data})
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')  
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('componentDidUpdate',nextProps)  
  }
  componentWillUnmount() {
    // huy
    console.log('componentWillUnmount')  
  }
  render() {
    const {data} = this.state
    console.log('data', data)
    return (
      data && data.length && data.map((item, index) =>{
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        )
      })
    )}
}