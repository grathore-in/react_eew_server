import React from 'react'

export default function Alert(props) {

    const capitilize = (word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }

    return (
        props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible`}>
                <strong>{capitilize(props.alert.title)}</strong>: {props.alert.message}
            </div>
    )
}
