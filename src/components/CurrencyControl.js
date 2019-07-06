import React from 'react'
import {Button, Select} from 'semantic-ui-react'
import style from '../styles/App.less';

const CurrencyControl = ({cleanup, update}) => {
    return (
        <div className="ui centered two column grid">
            <div className={style.currency_selector}>
                <Button onClick={update}>Update</Button>
                <Button onClick={cleanup}>Remove</Button>
            </div>
        </div>
    );
};

export default CurrencyControl;

