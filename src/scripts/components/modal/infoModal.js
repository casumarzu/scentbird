import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import Modal from './Modal'
import Button from 'Components/button/Button'
import CloseButton from 'Components/button/CloseButton'
import {data} from 'Data'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class InfoModal extends Component {
  constructor(props) {
    super(props)
    this.addListeners()
  }

  addListeners() {
    document.addEventListener('keydown', (evt) => {
      evt = evt || window.event
      let isEscape = false
      if ('key' in evt) {
        isEscape = evt.key === 'Escape'
      } else {
        isEscape = evt.keyCode === 27
      }
      if (isEscape) {
        this.closeModal()
      }
    })
  }

  closeModal() {
    const {uiList, showModal, closeModal} = this.props
    if(uiList.length > 1) {
      const promise = new Promise((resolve, reject) => {
        let nextArr = uiList
        nextArr = [...uiList]
        nextArr.splice(-1, 1)
        resolve(nextArr)
      })
      promise.then( nextArr => {
        closeModal(nextArr, false)
        return nextArr
      })
      promise.then( nextArr => {
        setTimeout(() => showModal(nextArr), 500)
      })
    }else {
      closeModal(uiList, false)
    }
  }

  onLayouClick(event) {
    this.closeModal()
  }

  onFinish(event) {
    this.closeModal()
  }

  render() {
    const {uiList, open} = this.props
    let info = {title: '', text: ''}
    if(uiList.length && open) {
      info = uiList[uiList.length - 1]
    }
    document.body.scrollTop = 0

    const {title, text} = info
    return (
      <ReactCSSTransitionGroup
        transitionName="animate-modal"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}>
        {
          open && (
            <div className="modal-layout">
              <div
                className="modal-layout__overlay"
                onClick={::this.onLayouClick}></div>
              <section className="modal-body">
                <section className="modal-body__inner">
                  <CloseButton onClick={::this.onFinish} />
                  <h1>{title}</h1>
                  {[1,2,3].map( i => <p key={i}>{text}</p>)}
                  <Button onClick={::this.onFinish}>Finish</Button>
                </section>
              </section>
            </div>
          )
        }
      </ReactCSSTransitionGroup>
    )
  }
}
