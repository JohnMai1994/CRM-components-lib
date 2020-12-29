import React, {useState} from 'react';
import StyleEditProfile from "./style";
import PropTypes from 'prop-types';
import Profile from "../Profile";

function EditProfile({children, ...rest}) {
    const [showEdit, setShowEdit] = useState(false)

    if (!showEdit) {
        return (
            <Profile
                onEdit={() => setShowEdit(true)}
                showEditBtn
                showCloseIcon={false}
            />
        )
    }

    return (
        <StyleEditProfile {...rest}>
            {children}
        </StyleEditProfile>
    );
}


EditProfile.propTypes = {
    children: PropTypes.any
};

export default EditProfile;