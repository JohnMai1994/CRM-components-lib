import React from 'react';
import StyleNoteList, {Notes} from "./style";
import PropTypes from 'prop-types';
import FilterList from "../FilterList";
import NoteCard from "../NoteCard";

function NoteList({children, ...rest }) {
    return (
        <StyleNoteList {...rest}>
            <FilterList
                options={["最新笔记优先","有改动的优先"]}
                actionLabel={"添加笔记"}
            >
                <Notes>
                    {
                       new Array(10).fill(0).map((_, i)=> (
                           <NoteCard key={i}/>
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