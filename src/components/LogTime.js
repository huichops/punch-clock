import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';

import { logTime } from '../redux/PunchClock';

const LogTime = ({dispatch}) => (
  <div>
    <Input
      label={{ basic: true, content: 'Entrada' }}
      type="time"
      name="entranceTime"
      defaultValue="16:00"
    />
    <Input
      label={{ basic: true, content: 'Salida' }}
      type="time"
      name="exitTime"
      defaultValue="21:00"
    />
    <Button 
      primary 
      onClick={() => {
        const startTime = document.querySelector('[name=entranceTime]').value;
        const endTime = document.querySelector('[name=exitTime]').value;
        dispatch(logTime({endTime, startTime}));
      }
    }>
      Log time
    </Button>
  </div>
);

export default connect()(LogTime);
