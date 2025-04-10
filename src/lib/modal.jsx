import React from 'react'
import 'modal.css'

export default function modal( { setModalOpen } ) {

    
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>Employee Created!</p>
                <button onClick={() => setModalOpen(false)}>OK</button>
            </div>
        </div>
    )
}
