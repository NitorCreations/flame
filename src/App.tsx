import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="app">
        <h1>Flame</h1>
        <p>Nitor is a Digital Engineering company where we – grown-up professionals – help our clients to succeed. Nitor’s reputation among its clients and employees is one its most valuable assets. For us, the benefit in maintaining a Design System is the added transparency in our design and communication as well as brand development.</p>
        <p>A Design System is a framework of practices that connect designers, developers and marketing professionals. It creates a common vocabulary with guidelines, patterns and components, raising confidence in the organization and in clients. This Flame Design System is an ever-expanding effort to start gathering Nitor’s design and brand assets in one place, where they can be developed and improved openly and in a consistent way.</p>
        <p>For more information go to <a href="https://www.nitor.com/">Nitor.com</a></p>
      </div>
    );
  }
}

const app: React.ComponentType = hot(module)(App);

export { app as App };
