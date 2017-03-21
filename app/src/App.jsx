import React, {Component} from 'react'
import Button from 'ui/button'
import Input from 'ui/input'
import ShortedLink from './components/shortedlink'
import {Container, Row, Column} from 'ui/layout'

const App = () => (
  <Container>
    <Row>
      <Column><h1>Shooooort</h1></Column>
      <Column><p>The link shortener with a long name</p></Column>
    </Row>
    <Row>
      <Column>
        <Input />
      </Column>
      <Column>
        <Button>Shorten this link</Button>
      </Column>
    </Row>
    <ShortedLink />
    <ShortedLink />
    <ShortedLink />
    <ShortedLink />
  </Container>
)

export default App
