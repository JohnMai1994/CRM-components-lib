import React from 'react';
import StyleFileList, {Files} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import FileCard from "../FileCard";
import useStaggeredList from "../../hooks/useStaggeredList";
import {animated} from "react-spring";
import filesData from "../../data/files";

function FileList({children, ...rest}) {
    const trailAnimes = useStaggeredList(10)

    return (
        <StyleFileList {...rest}>
            <FilterList
                options={["最新文件优先", "按文件名排序"]}
            >
                <Files>
                    {
                        filesData.map((file, i) => (
                            <animated.div key={file.id} style={trailAnimes[i]}>
                                <FileCard key={file.id} file={file}/>
                            </animated.div>
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