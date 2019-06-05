import React from 'react'

export default class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: window.localStorage.getItem('username') === 'leonardo'
    }
  }

  render() {
    return this.props.children({
      isAuth : this.state.isAuth,
      name: 'Leonardo'
    })
  }
}