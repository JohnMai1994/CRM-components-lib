import React from 'react';
import StyleContactList, {Contacts} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import ContactCard from "../ContactCard";
import useStaggeredList from "../../hooks/useStaggeredList";
import {animated} from "react-spring";

function ContactList({children, ...rest }) {
    const trailAnimes = useStaggeredList(10)


    return (
        <StyleContactList {...rest}>
            <FilterList
                options={["新添加优先", "按姓名排序"]}
                actionLabel="添加好友"
            >
                <Contacts>
                    {
                        new Array(10).fill(0).map((_, i) => (
                            <animated.div key={i} style={trailAnimes[i]} >
                                <ContactCard key={i}/>
                            </animated.div>
                        ))
                    }
                </Contacts>
            </FilterList>
        </StyleContactList>
    );
}


ContactList.propTypes = {
   children: PropTypes.any
};

export default ContactList;