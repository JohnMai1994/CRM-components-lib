import React from 'react';
import StyleFileList, {Files} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import FileCard from "../FileCard";

function FileList({children, ...rest }) {
    return (
        <StyleFileList {...rest}>
            <FilterList
                options={["最新文件优先", "按文件名排序"]}
            >
                <Files>
                    {
                        new Array(10).fill(0).map((_, i) => (
                            <FileCard key={i}/>
                        ))
                    }
                </Files>
            </FilterList>

        </StyleFileList>
    );
}


FileList.propTypes = {
   children: PropTypes.any
};

export default FileList;