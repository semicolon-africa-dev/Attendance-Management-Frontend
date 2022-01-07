import React, {useState} from 'react';
import {Box} from '@chakra-ui/react'
import "./lowBar.css"


const Lowbar = () => {
    const [checked, setChecked] = useState(false);

    const days = [
        {
            day: 'Mon',
            checked: false
        },
        {
            day: 'Tues',
            checked: false
        },
        {
            day: 'Wed',
            checked: false
        },
        {
            day: 'Thurs',
            checked: false
        },
        {
            day: 'Fri',
            checked: false
        },
    ]

    const handleCheck = () => {
        setChecked( true);
    }

    return (
        <div>
            <div>
            <p style={{paddingTop: '50px', fontSize: '36px'}} >👋 WELCOME! ISSAC</p>
            </div>
            <Box bg='white' w='95%' h='60vh' p={4} marginTop={"8%"} marginLeft={"20px"} display={'flex'}
                color='black' borderRadius={'20px'} boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25'}>

                <h1 className={"week"}>WeeK <button className={"btn"}>2</button></h1>

                <div className={"days-list"}>
                    <h4 className={"day-heading"}>Days</h4>
                    <div className="day-list__checkbox">
                        <ul>
                            {days.map((day, index) =>
                            <div key={index}>
                                <div>
                                    <label>
                                        {day.day}
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={checked} onChange = {handleCheck}/>
                                </div>
                            </div>
                            )}
                        </ul>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Lowbar;