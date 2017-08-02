import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import { logTime, editTimeEntry } from './redux/PunchClock';

import LogTime from './components/LogTime';
import TimeList from './components/TimeList';
import TotalTime from './components/TotalTime';

const App = ({ actions, entries }) => (
    <div className='App'>
      <Container text>
        <Header as='h1' textAlign='center'>CHK</Header>
        <LogTime onSave={actions.logTime} />
        <TotalTime />
        <TimeList onEdit={actions.editTimeEntry} />
      </Container>
    </div>
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logTime, editTimeEntry }, dispatch)
})

export default connect(state => state, mapDispatchToProps)(App);
