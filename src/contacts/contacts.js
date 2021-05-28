import React from "react"
import s from './contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import inputStyle from '../common/styles/Input.module.scss'
import textareaStyles from '../common/styles/Textarea.module.scss'
import Title from "../common/components/title/Title";
import {CustomButton} from "../common/components/CustomButton/CustomButton";
import Fade from 'react-reveal/Fade';

const Contacts = (props) => {

    const onFormClickHandler = e => {
        e.preventDefault()
        props.sentForm()
    }
    return (
        <div id={"Contacts"} className={s.contactsBlock}>
            <Fade right>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title text={'Contact'}/>

                    <form className={s.contactsForm}>
                        <input placeholder={'name'}
                               className={`${inputStyle.input} ${s.contactsInput} ${s.nameInput}`}
                               type="text"
                               onChange={props.nameOnChangeHandler}
                               id={"name"}/>
                        <input placeholder={'email'} value={props.details.email}
                               className={`${inputStyle.input} ${s.contactsInput}`}
                               id={"email"}
                               onChange={props.emailOnChangeHandler}/>
                        <textarea placeholder={'Your message'} value={props.details.message}
                                  className={textareaStyles.textarea}
                                  id={"message"} onChange={props.messageOnChangeHandler}/>
                        <CustomButton onClick={onFormClickHandler}>Send a request</CustomButton>
                    </form>
                </div>
            </Fade>

        </div>
    )
}

export default Contacts;