import React from 'react';
import { Route } from 'react-router-dom';

// customized components
import PrimaryLayout from 'layout/primary';

type Interfacet = {
  component: () => JSX.Element;
  layout: string;
  path: string;
  nav?: string;
};

const RouteWrapper = ({ component: Copmonent }: Interfacet) => {
  return (
    <PrimaryLayout>
      <Route component={Copmonent}></Route>
    </PrimaryLayout>
  );
};

export default RouteWrapper;
