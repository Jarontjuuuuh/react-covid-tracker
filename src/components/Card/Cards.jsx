import React from "react"
import './Cards.css'

const Cards = ({ title, value, lastUpdated }) => {
    return (
        <div className="layout-1">
            <div className="layout-2">
                <div className="flex-p">
                    <div className="flex-wrap-1">
                        <div className="flex-relative">
                            <h5 className="title"> { title }</h5>
                            <span className="value">{ value }</span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial"></div>
                    </div>
                    <p className="date">
                    <span className="whitespace-nowrap">{ lastUpdated}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cards;