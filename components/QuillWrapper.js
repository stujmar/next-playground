import React, {Component} from 'react'
import Quill from 'react-quill'

export default class FormHtmlEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (document) {
      return (
        <Quill
          onChange={this.props.onChange}
          theme="bubble"
          value={this.props.value}
        />
      )
    } else {
      return <textarea value={this.props.value} />
    }
  }
}