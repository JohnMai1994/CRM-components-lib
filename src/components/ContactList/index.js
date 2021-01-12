import React from 'react';
import StyleContactList, {Contacts} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import ContactCard from "../ContactCard";

function ContactList({children, ...rest }) {
    return (
        <StyleContactList {...rest}>
            <FilterList
                options={["新添加优先", "按姓名排序"]}
                actionLabel="添加好友"
            >
                <Contacts>
                    {
                        new Array(10).fill(0).map((_, i) => (
                            <ContactCard key={i}/>
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