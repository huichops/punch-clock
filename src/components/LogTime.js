import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';

import { logTime } from '../redux/PunchClock';

const LogTime = ({ dispatch }) => (
  <div>
    <Input
      label={{ basic: true, content: 'Entrada' }}
      name="date"
      type="date"
      defaultValue='2017-01-01'
    />
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
      type="submit"
      onClick={() => {
        const startTime = document.querySelector('[name=entranceTime]').value;
        const endTime = document.querySelector('[name=exitTime]').value;
        const date = document.querySelector('[name=date]').value;
        dispatch(logTime({ date, endTime, startTime }));
      }
    }>
      Log time
    </Button>
  </div>
);

export default connect()(LogTime);
