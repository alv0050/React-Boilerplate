import React from 'react';

import RouteWithSubRoutes from './containers/RouteWithSubRoutes';
import routes from './routes';

function App() {
  return (
    <div>
      {routes.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default App;
