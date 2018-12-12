import * as React from 'react';

interface IButtonPropTypes {
    text: string;
    onClick: () => void;
}

export default class Button extends React.PureComponent<IButtonPropTypes, {}> {
    public render() {
        const {text, onClick} = this.props;
        return (
            <button className="button" type="button" onClick={onClick}>
                <span>
                    {text}
                </span>
            </button>
        );
    }
}