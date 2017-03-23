import React from 'react'
import {shallow, render} from 'enzyme'
import sinon from 'sinon'
import Button from '../Button'


describe('Button',() => {
  let handler = jest.fn()
  let wrapper = shallow(<Button handleClick={handler} />)

  it('should be a mountable component', () => {
    expect(wrapper.type()).toBe('input')
  })

  it('should call handler on click', () => {
    expect(wrapper.simulate('click'))
    expect(handler).toBeCalled()
  })

  it('should be disabled by default', () => {
    let wrapperRender = wrapper.render()
    expect(wrapperRender.find('input').attr('disabled')).toBe('disabled')
  })

  it('should be enabled when valid is true', () => {
    wrapper.setProps({
      valid: true
    })
    expect(wrapper.render().find('input').attr('disabled')).toBe(undefined)
  })
})
