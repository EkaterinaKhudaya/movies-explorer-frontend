import './FilterCheckbox.css'
import React from 'react';


function FilterCheckbox() {
    const [isToggle, switchToggle] = React.useState(false)

    function toggle() {
        let data = !isToggle
        switchToggle(data)
    }

    return (
        <>
            <div className={`toggle ${isToggle ? 'toggle-right' : ''}`} onClick={toggle}/>
            <span className="filter__label">Короткометражки</span>
        </>
    )
}

export default FilterCheckbox
