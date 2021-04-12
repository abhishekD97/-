import React from "react";
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';

function Services(){
    return (
        <div>
            <div className="containServices px-5 py-1">
                <div className="servicesHeader py-4">
                    <h1>My Services</h1>
                </div>
                <div className="services py-2">
                    <div className="webDesign">
                        <div className="circle"><WebIcon className="icon" style={{ fontSize: 30 }}/></div>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, nunc at sollicitudin scelerisque.</p>
                    </div>
                    <div className="backEnd">
                        <div className="circle"><SettingsIcon className="icon" style={{ fontSize: 30 }}/></div>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, nunc at sollicitudin scelerisque.</p>
                    </div>
                    <div className="database">
                        <div className="circle"><StorageIcon className="icon" style={{ fontSize: 30 }}/></div>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, nunc at sollicitudin scelerisque.</p>
                    </div>
                    <div className="fullStack">
                        <div className="circle"><HorizontalSplitIcon className="icon" style={{ fontSize: 30 }}/></div>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, nunc at sollicitudin scelerisque.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;