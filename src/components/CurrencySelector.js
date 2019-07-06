import React from 'react';
import {Select} from "semantic-ui-react"
import style from '../styles/App.less';

const CurrencySelector = ({currency, selectCurrency}) => {
    const list = Object.values(currency).map(item => (
        {key: item.ID, value: item.CharCode, text: item.Name}
    ));

    return (
        <div className="ui centered two column grid">
            <div className={style.currency_selector}>
                <Select placeholder='Select your currency'
                        options={list}
                        onChange={selectCurrency}/>
            </div>
        </div>
    );
};

export default CurrencySelector;