import React from "react"
import s from './contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import inputStyle from '../common/styles/Input.module.css'
import textareaStyles from '../common/styles/Textarea.module.css'
import styleButton from '../common/styles/Button.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={s.contactsForm} action="post">
                    <span><label htmlFor="phone">Phone</label></span>
                    <input className={`${inputStyle.input} ${s.contactsInput}`} type="text" id={"phone"}/>
                    <label htmlFor="email">Email</label>
                    <input className={`${inputStyle.input} ${s.contactsInput}`} type="text" id={"email"}/>
                    <label htmlFor="message">Message</label>
                    <textarea className={textareaStyles.textarea} type="text" id={"message"}/>
                    <button className={`${styleButton.button} ${s.formButton}`}>Send a request</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;