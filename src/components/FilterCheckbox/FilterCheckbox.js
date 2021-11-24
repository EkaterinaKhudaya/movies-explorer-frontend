import './FilterCheckbox.css'
import React from 'react';

function FilterCheckbox(props) {
    const [isToggle, switchToggle] = React.useState(false)

    const toggle = () => {
        let data = !isToggle
        props.handleShortFilm(data)
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
