import React from "react";
import { usePopper } from 'react-popper';


export const IconPopper: React.FC<{}> = (props) =>{
    return <div>Hello IconPopper</div>;
}

// This is going to create a virtual reference element
// positioned 10px from top and left of the document
// 90px wide and 10px high
const virtualReference = {
    getBoundingClientRect() {
        return {
            top: 10,
            left: 10,
            bottom: 20,
            right: 100,
            width: 90,
            height: 10,
        };
    },
};

export const Example = () => {
    const [popperElement, setPopperElement] = React.useState(null);
    const { styles, attributes } = usePopper(virtualReference, popperElement);

    return (
        <div ref={setPopperElement} style={{...styles.popper, color: "red", width: 100 , height:100, border: "2px solid green"}} {...attributes.popper}>
            Popper element
        </div>
    );
};