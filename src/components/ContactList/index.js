import React from 'react';
import StyleContactList, {Contacts} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import ContactCard from "../ContactCard";
import useStaggeredList from "../../hooks/useStaggeredList";
import {animated} from "react-spring";
import contactsData from "../../data/contacts";

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
                        contactsData.map((contact, i) => (
                            <animated.div key={contact.id} style={trailAnimes[i]} >
                                <ContactCard key={contact.id} contact={contact}/>
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