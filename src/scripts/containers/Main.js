import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import mui from 'material-ui'
import Button from 'Components/button/Button'
import Checkbox from 'Components/button/Checkbox'
import InfoModal from 'Components/modal/InfoModal'
import * as uiActions from 'Actions/UI.Actions'
import {data} from 'Data'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: 0,
      select: true,
      modalList: [data[0]]
    }
  }

  onSelectChange(event) {
    const {value} = event.currentTarget
    this.setState({checked: +value, modalList: [data[+value]]})
  }

  onCheck(event) {
    const {checked} = event.currentTarget
    if(checked) {
      this.setState({
        select: false,
        modalList: [...data]
      })
    }else{
      this.setState({
        select: true,
        modalList: [
          data[this.state.checked]
        ]
      })
    }
  }

  showModal() {
    const {showModal} = this.props.uiActions
    const {modalList} = this.state
    showModal(modalList)
  }

  render() {
    const {uiList, uiActions, open} = this.props
    const {showModal, closeModal} = uiActions
    const {checked, select, modalList} = this.state
    const OptionsNode = data.map( (item, i) => (
      <option key={i} value={i}>{item.title}</option>
    ))
    return (
      <div>
          <div className="content-block">
          <h1>Some statistics</h1>
          <section className="select-modal">
            <div className="checkbox-block">
              <Checkbox onChange={::this.onCheck}>Open all popups</Checkbox>
            </div>
            <div className="select-wrapper">
              <select
                onChange={::this.onSelectChange}
                disabled={!select}>
                {OptionsNode}
              </select>
            </div>
            <Button
              onClick={::this.showModal}
              >Open</Button>
          </section>
        </div>
        <InfoModal
          open={open}
          showModal={showModal}
          closeModal={closeModal}
          modalList={modalList}
          uiList={uiList}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    uiList: state.ui.list,
    open: state.ui.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
