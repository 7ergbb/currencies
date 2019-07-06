import React from 'react'
import {Table, TableBody, TableCell, TableRow} from 'semantic-ui-react'

const CurrencyTable = ({currency, savedCurrency}) => {
    const currencyList = (Object.keys(currency).length && savedCurrency.data)
        ? savedCurrency.data.map(item =>
            (
                <TableRow>
                    <TableCell>
                        {currency[item].CharCode}
                    </TableCell>
                    <TableCell>
                        {currency[item].Name}
                    </TableCell>
                    <TableCell>
                        {currency[item].Value}
                    </TableCell>
                </TableRow>
            )
        ) : [];
    return (
        <div className="ui centered two column grid">
            <Table singleLine color={'read'}>
                <TableBody>
                    {currencyList}
                </TableBody>
            </Table>
        </div>

    );
};

export default CurrencyTable;
