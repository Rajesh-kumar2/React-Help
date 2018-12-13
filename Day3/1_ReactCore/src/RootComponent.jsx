import React, { Component } from 'react';
import Parent from './1_LifecycleMethods';
import AjaxComponent from './2_AjaxComponent';
import ErrorHandler from './common/ErrorHandler';
import Assignment from './3_Assignment';

class RootComponent extends Component {
    render() {
        return (
            <div>
                <ErrorHandler>
                    {/* <Parent/> */}
                    {/* <AjaxComponent /> */}
                    <Assignment/>
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;