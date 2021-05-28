import s from './CustomSnackbar.module.css'
import {memo, useEffect, useState} from 'react'


export const CustomSnackbar = memo(({title, timer}) => {

    const [visual, setVisual] = useState(false)

    useEffect(() => {
        setVisual(() => true)
        const show = setTimeout(() => {
            setVisual(() => false)
        }, timer)
        return () => {
            clearTimeout(show)
        }
    }, [timer])

    return (
        <>
            {
                visual &&
                <div className={s.snackbar}>
                    {title}
                </div>
            }
        </>
    )
})