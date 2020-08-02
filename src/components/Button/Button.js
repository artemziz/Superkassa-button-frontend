import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {switchBtn} from '../../redux/actions/switchBtn';

import './Button.css';

const Button =({btn, switchBtn}) =>{
    const handleBtn = useCallback(
        (event) => {
            event.preventDefault();
            switchBtn();
        },
        [event],
    );
    return (
        <div className='Button'>
            <button onClick={handleBtn} className='Button-body'>
                {btn?(
                    <a
                        href='#'
                        className='Button-text Button-text-active'> on </a>
                ):(
                    < a
                        href='#'
                        className='Button-text'> off </a>
                )}
            </button>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return {
        btn: state.Btn.isOn,
    };
};

const mapDispatchToProps = {
    switchBtn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
