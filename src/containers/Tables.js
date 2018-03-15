import React from 'react';
import { Switch, Route } from 'react-router-dom';

import data from '../data/';
import Table from '../components/Table';

const Tables = () => (
  <div className="container">
    <Switch>
      {Object.keys(data).map(key => (
        <Route key={key} path={`/tables/${key}`} component={() => <Table data={data[key]} />} />
      ))}
      <Route component={() => <p>404</p>} />
    </Switch>
  </div>
);

export default Tables;
