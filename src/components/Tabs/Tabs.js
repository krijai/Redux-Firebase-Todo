import React, { Fragment, useState, Children } from 'react';
import './Tabs.scss';

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState("todo-list");

    let buttons = [];
    let content;

    const changeTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="tabs-container">
            {Children.map(props.children, (child) => {
                buttons.push(child.props.label)
                if(child.props.label === activeTab) content=child.props.children
            })}
            <TabButton buttons={buttons} activeTab={activeTab} changeTab={changeTab} />
            {content}
        </div>
    )
}

const TabButton = (props) => {
    return(
        <div className="tab-btn-wrapper">
            {props.buttons.map((button) => {
                return (
                <button className={button===props.activeTab ? "active" : ""} onClick={() => props.changeTab(button)}>
                    <i className={button}></i>
                </button>
                )
            })}
        </div>
    )
}

const Tab = (props) => {
    return(
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export { Tabs, Tab, TabButton };