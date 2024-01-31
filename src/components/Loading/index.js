import {  useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
export default function Loading(){
    const {loading} = useContext(Context)
    return(
        <div id={loading?"principal": "gd"}  className={loading?'loading show': 'loading' }>
            <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}