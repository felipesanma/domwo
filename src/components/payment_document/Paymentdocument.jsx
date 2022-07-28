// eslint-disable-next-line import/no-webpack-loader-syntax
var htmlModule = require('raw-loader!./index.html');
var html = htmlModule.default;

const PaymentDocument = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    )
}



export default PaymentDocument



