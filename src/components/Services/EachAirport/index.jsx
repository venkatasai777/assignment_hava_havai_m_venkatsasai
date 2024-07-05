import React from 'react'
import './index.css'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Navigate, useNavigate } from 'react-router-dom';



const EachAirport = (props) => {
    const navigate = useNavigate()
    const {each, onClickDelBtn} = props 
    
    const {name, country, id, code, terminals} = each
    const deleteBtnClicked = () => {
        onClickDelBtn(id)
    }
    const onClickAirport = () => {
        return navigate(`/services/airport/details`)
    }

  return (
    <li className='eachListCon'>
        <div className='eachCheckBoxCon'>
            <input type="checkbox" name={name} id={name} className='checkboxCss' value={id}  />
            <label htmlFor={name} onClick={onClickAirport}>{name}</label>
        </div>
        <div className='rightSectionCon'>
            <div className='rightSection'>
                <label htmlFor={name}>{country}</label>
            </div>
            <div className='rightSectionEach'>
                <label htmlFor={name}>{code}</label>
            </div>
            <div className='rightSectionEach'>
                <label htmlFor={name}>{terminals}</label>
            </div>
            <div className='rightSectionEach'>
                <button type='button' htmlFor={name} className='editBtn'>
                    <MdModeEdit size={20}/>
                </button>
            </div>
            <div className='rightSectionEach'>
                <button type='button' htmlFor={name} className='editBtn' onClick={deleteBtnClicked}>
                    <RiDeleteBin6Fill size={20} />
                </button>
            </div>
        </div>
    </li>
  )
}

export default EachAirport