import React from 'react';
import StyleFileCard, {FileIcon, FileName, FileSize, Options, Time} from "./style";
import PropTypes from 'prop-types';

import {ReactComponent as FileZip} from "asserts/icons/fileZip.svg";
import {ReactComponent as FileExcel} from "asserts/icons/fileExcel.svg";
import {ReactComponent as FileWord} from "asserts/icons/fileWord.svg";
import {ReactComponent as FilePpt} from "asserts/icons/filePpt.svg";
import {ReactComponent as FileImage} from "asserts/icons/fileImage.svg";
import {ReactComponent as FilePdf} from "asserts/icons/filePdf.svg";
import {ReactComponent as OptionsIcon} from "asserts/icons/options.svg";

import Icon from "../Icon";

const fileIcons = {
    zip: FileZip,
    image: FileImage,
    pdf: FilePdf,
    word: FileWord,
    excel: FileExcel,
    ppt: FilePpt
};


function FileCard({children, ...rest }) {
    return (
        <StyleFileCard {...rest}>
            <FileIcon icon={fileIcons.zip}/>
            <FileName>Source Code.zip</FileName>
            <FileSize>1.5M</FileSize>
            <Options>
                <Icon icon={OptionsIcon} opacity={0.3}/>
            </Options>
            <Time>2020年02月03日</Time>
        </StyleFileCard>
    );
}


FileCard.propTypes = {
   children: PropTypes.any
};

export default FileCard;