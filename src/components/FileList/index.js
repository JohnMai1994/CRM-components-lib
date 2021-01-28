import React from 'react';
import StyleFileList, {Files} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import FileCard from "../FileCard";
import useStaggeredList from "../../hooks/useStaggeredList";
import {animated} from "react-spring";

function FileList({children, ...rest}) {
    const trailAnimes = useStaggeredList(10)

    return (
        <StyleFileList {...rest}>
            <FilterList
                options={["最新文件优先", "按文件名排序"]}
            >
                <Files>
                    {
                        new Array(10).fill(0).map((_, i) => (
                            <animated.div key={i} style={trailAnimes[i]}>
                                <FileCard key={i}/>
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