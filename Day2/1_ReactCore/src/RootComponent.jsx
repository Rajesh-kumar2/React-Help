import React, { Component } from 'react';
import ComponentWithState from './1_ComponentWithState';
import ComponentWithProps from './2_ComponentWithProps';
import Button from './3_ComponentWithMethod';
import ButtonWithStateChange from './4_StateChange';
import ClockRoot from './5_ClockAssignment';
import EventComponent from './6_SyntheticEvents';
import CounterRoot from './7_Counter';
import AssignmentComponent from './8_Assignment';
import ControlledVsUncontrolled from './9_ControlledVsUncontrolled';
import CalculatorAssignment from './10_CalculatorAssignment';
import ListRoot from './11_ListComponent';
import PTRoot from './12_PropTypes';

var city = "Pune";

class RootComponent extends Component {
    render() {
        return (
            <div>
                {/* <ComponentWithState /> */}
                {/* <ComponentWithProps name={"Abhijeet"} age={35} city={city}/> */}
                {/* <Button/> */}
                {/* <ButtonWithStateChange/> */}
                {/* <ClockRoot/> */}
                {/* <EventComponent/> */}
                {/* <CounterRoot/> */}
                {/* <AssignmentComponent/> */}
                {/* <ControlledVsUncontrolled/> */}
                {/* <CalculatorAssignment/> */}
                {/* <ListRoot/> */}
                <PTRoot/>
            </div>
        );
    }
}

export default RootComponent;