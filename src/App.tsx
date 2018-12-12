import * as React from 'react';
import {hot} from 'react-hot-loader';
import Button from "./components/Button/Button";

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className="app">
                <h1>Flame</h1>
                <Button
                    text="test button"
                    onClick={() => console.log('lol internet')}
                />
            </div>
        );
    }
}

const app: React.ComponentType = hot(module)(App);

export {app as App};
