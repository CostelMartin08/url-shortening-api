import React from "react";


const ConnectButton = (props) => {

    const styles ={
        set:{
            width: props.width,
            height: props.height,
            borderRadius: props.radius,
            fontSize: '18px',
            border: 'none',
            color: props.colorL,
            backgroundColor: props.bg,
        }
    }


    return (


        <>

        <button className='btn-foo' style={styles.set} >{props.text}</button>

   
        </>
    )
}

export default ConnectButton;