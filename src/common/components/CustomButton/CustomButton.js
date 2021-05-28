import style from './CustomButton.module.scss'
export const CustomButton = (props) => {
    return (
        <button className={style.button} {...props}/>
    )
}