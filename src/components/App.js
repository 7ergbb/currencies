import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrency} from '../action/CurrencyAction'
import {selectCurrency} from '../action/SelectorAction'
import CurrencyControl from './CurrencyControl'
import CurrencySelector from './CurrencySelector'
import CurrencyTable from './CurrencyTable'


import '../styles/App.less';

const COOKIE_NAME = 'test2_cookie'

export class App extends Component {
    constructor(props) {
        super(props)
        let timer = null;
    }

    componentDidMount = () => {
        this.props.dispatch(getCurrency());
        if (this.props.cookie.get(COOKIE_NAME)) {
            this.props.dispatch(selectCurrency(this.props.cookie.get(COOKIE_NAME).curr))
        }
        timer = setInterval(() => this.props.dispatch(getCurrency()), 120000);
    };

    componentWillUnmount() {
        this.clearInterval(this.timer);
    }

    getCurrency = () =>{
        this.props.dispatch(getCurrency());
    };

    removeCookie = ({}) => {
        this.props.cookie.remove(COOKIE_NAME);
        this.props.dispatch(selectCurrency(null));
    };

    setCookie = (e, {name, value}) => {
        const cookie = this.props.cookie;
        const currency_cookie = cookie.get(COOKIE_NAME);
        if (currency_cookie && ('curr' in currency_cookie)) {
            let savedCurrency = new Set(currency_cookie.curr);
            if (savedCurrency.has(value)) return;
            savedCurrency.add(value);
            cookie.set(COOKIE_NAME, {curr: Array.from(savedCurrency.keys())})

        } else {
            cookie.set(COOKIE_NAME, {curr: [value]})
        }
        this.props.dispatch(selectCurrency(cookie.get(COOKIE_NAME).curr));
    };

    render() {
        const {currencyData, selectedData} = this.props
        const currency_list = currencyData ? currencyData : [];

        return (
            <div className="ui text container currency">
                <h1>Currency App!</h1>
                <CurrencySelector currency={currency_list}
                                  selectCurrency={this.setCookie}/>
                <CurrencyTable currency={currency_list}
                               savedCurrency={selectedData ? selectedData : []}/>
                <CurrencyControl cleanup={this.removeCookie} update={this.getCurrency}/>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    cookie: PropTypes.object,
    currencyData: PropTypes.object,
    selectedData: PropTypes.object
};

const mapStateToProps = state => {
    return {
        currencyData: state.allCurrencyState.data,
        selectedData: state.selectorState
    }
};


export default connect(mapStateToProps)(App);