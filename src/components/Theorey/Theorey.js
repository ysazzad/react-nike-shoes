import React from 'react';
import './Theorey.css'

const Theorey = () => {
    return (
        <div >
            <h1 className='theorey'>Theorey Part</h1>
            <div>
                <h3 className='title-question'>Difference between props and state</h3>
                <p>
                    1. props are used to pass data and state is used to store data. <br />
                    2. props can be used in both functional and class components and state can only be used in class components. <br />
                    3. props are immutable and state can change the data. <br />
                    4. props are set by the parent component for children component and state is updated by event handler. <br />
                    5.props can not change inside component and state can change inside component
                </p>
            </div>
            <div>
                <h3 className='title-question'> How useState works </h3>
                <p>
                    1. useState() is a built-in function that comes with the React library. <br />
                    2. useState() should only be used inside a functional component. <br />
                    3. The first parameter in the array is the current state value.  <br />
                    4. The second parameter is the function that will allow you to update the state value. <br />
                    5. useState() does not work in class component.
                </p>

            </div>
        </div>
    );
};

export default Theorey;