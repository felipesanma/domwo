import Home from '../home/Home';
import PaymentDocument from '../payment_document/Paymentdocument';
import UserProfile from '../user_profile/Userprofile';
import './widget.scss';


const Widget = ({ type }) => {
    if (type === "user") {
        return (
            <UserProfile />
        )
    }
    else if (type === "paymentdoc") {
        return (
            <PaymentDocument />
        )
    }
    else if (type === "home") {
        return (
            <Home />
        )
    }

}

export default Widget