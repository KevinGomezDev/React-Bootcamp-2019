import React from 'react'

const withAuth = (WrappedComponent) =>
  class withAuth extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentUser: window.localStorage.getItem('username')
      }
    }

    render () {
      const data = {
        ...this.props,
        isAuth: (this.state.currentUser === 'leonardo')
      }
      return <WrappedComponent {...data } />
    }
  }

export default withAuth
