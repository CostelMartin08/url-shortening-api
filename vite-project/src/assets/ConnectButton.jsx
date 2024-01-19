import React from "react";


const ConnectButton = (props) => {

    const styles ={
        set:{
            width: props.width,
            height: props.height,
            borderRadius: props.radius,
            fontWeight: '700',
            fontSize: '18px',
            border: 'none',
            color: props.colorL,
            fontWeight: '700',
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