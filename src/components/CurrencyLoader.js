import React from "react";
import style from '../styles/App.less';

const CurrencyLoader = ({currency, selectCurrency}) => {


    return (
        <div className="ui centered two column grid">
            <div className={style.currency_loader}>
                <label className={style.blink}>LOAD..........</label>
            </div>
        </div>
    );
};

export default CurrencyLoader;