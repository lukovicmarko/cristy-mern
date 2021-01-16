import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="header-text">
                <h1>New Arrivals</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis minima distinctio deleniti facere praesentium dolorum, quis accusamus sunt repellendus impedit, at quisquam dolorem. Inventore, quisquam quidem temporibus in quis, quos, similique perspiciatis non harum debitis assumenda est eligendi quo dicta culpa. </p>
                <a href="" className="header-text__link">View Collection <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="header-image">
                <img src="/images/nike_1.png" alt="" />
            </div>
        </header>
    )
}

export default Header
