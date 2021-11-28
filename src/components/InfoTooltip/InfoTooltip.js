import React from 'react';
import './InfoTooltip.css'


function InfoTooltip(props) {

    return (
        <section className={`popup  ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container ${props.isSuccess ? 'popup__container_success': 'popup__container_error'}`}>
                <button className="popup__close-button " type="button"
                        onClick={props.onClose}/>
                <div className="popup__infoTooltip">
                    <p className="popup__infoTooltip_info">{props.message}</p>
                </div>
            </div>
        </section>
    )
}

export default InfoTooltip
