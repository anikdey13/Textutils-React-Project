import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (

    props.alert && <div>
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show " role="alert alertBox`}>
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.messege}
        </div>
    </div>
  )
}
