import React from 'react';
import StyleNoteList, {Notes} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import NoteCard from "../NoteCard";
import useStaggeredList from "../../hooks/useStaggeredList";
import {animated} from "react-spring";

function NoteList({children, ...rest}) {
    const trailAnimes = useStaggeredList(10)


    return (
        <StyleNoteList {...rest}>
            <FilterList
                options={["最新笔记优先", "有改动的优先"]}
                actionLabel={"添加笔记"}
            >
                <Notes>
                    {
                        new Array(10).fill(0).map((_, i) => (
                            <animated.div key={i} style={trailAnimes[i]}>
                                <NoteCard key={i}/>
                            </animated.div>
                        ))
                    }
                </Notes>
            </FilterList>
        </StyleNoteList>
    );
}


NoteList.propTypes = {
    children: PropTypes.any
};

export default NoteList;