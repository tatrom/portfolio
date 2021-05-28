import Contacts from "./contacts";
import * as React from "react";
import * as emailjs from "emailjs-com";
import Loader from "react-loader-spinner";
import s from './contactsContainer.module.scss'
import {CustomSnackbar} from "../utils/CustomSnackbar";

class ContactsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {name: '', email: '', message: ''},
            isClicked: false,
            isLoading: false,
            error: '',
            isSuccess: false
        }
        this.data = {
            serviceID: "service_53qnrbq",
            templateID: 'template_r0utdlm',
            userID: "user_p0N1dyPfveudHNLpSvNOY",
            name: this.state.name
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isClicked) {
            const promise = emailjs.send(this.data.serviceID, this.data.templateID, this.state.details, this.data.userID)
                .then((result) => {
                    console.log(result)
                    this.setState({isClicked: false, isLoading: false, isSuccess: true})
                })
            promise.catch(error => {
                console.warn('error')
                this.setState({error: error.text, isLoading: false, isClicked: false})
            })
        }

    }


    nameOnChangeHandler = (e) => {
        this.setState(
            {details: {...this.state.details, name: e.currentTarget.value}}
        )
    }
    emailOnChangeHandler = (e) => {
        this.setState(
            {details: {...this.state.details, email: e.currentTarget.value}}
        )
    }
    messageOnChangeHandler = (e) => {
        this.setState(
            {details: {...this.state.details, message: e.currentTarget.value}}
        )
    }

    sentForm = () => {
        this.setState({isClicked: true, isLoading: true})
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className={s.preloader}>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
            )
        }
        return (
            <>
                <
                    Contacts
                    details={this.state}
                    nameOnChangeHandler={this.nameOnChangeHandler}
                    emailOnChangeHandler={this.emailOnChangeHandler}
                    messageOnChangeHandler={this.messageOnChangeHandler}
                    sentForm={this.sentForm}
                />
                {this.state.error !== '' && <CustomSnackbar title={this.state.error} timer={3000}/>}
                {this.state.isSuccess &&
                <CustomSnackbar title={'Thanks for reaching out! Your message has been sent successfully'}
                                timer={3000}/>}
            </>
        )
    }

}

export default ContactsContainer;