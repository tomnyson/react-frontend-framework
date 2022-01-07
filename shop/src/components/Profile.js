
import React from 'react';
import './style.scss';
class Profile extends React.PureComponent  {
  constructor(props) {
    super(props)
    }

    componentWillReceiveProps(nextProps){
      if((nextProps.name !== this.props.name)){
        console.log('will update')
        return true
      }
      return false
    }

  render() {
    return (
      <>
        <h1 className="header"> TÊN: {this.props && this.props.name}</h1>
        <h1>MSSV: {this.props && this.props.mssv}</h1>
      </>
    )
  }
}
export default Profile;