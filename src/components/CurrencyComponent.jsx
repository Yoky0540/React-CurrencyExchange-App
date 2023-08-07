import React from 'react'

const CurrencyComponent = (props) => {
    const {currencyChoice,selectCurrency,changeCurrency,amount,onChangeAmount} = props

    return (
        <div className='currency'>
            <select value={selectCurrency} onChange={changeCurrency}>
                {currencyChoice.map((choice,index)=>
                    <option key={index} value={choice}>{choice}</option>
                )}
            </select>
            <input type="number" value={amount} onChange={onChangeAmount}/>
        </div>
    )
}

export default CurrencyComponent