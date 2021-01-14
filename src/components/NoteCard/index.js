import React from 'react';
import StyleNoteCard, {NoteExcerpt, NoteImage, NotePublishTime, NoteTitle} from "./style";
import PropTypes from 'prop-types';
import note1 from "asserts/images/note-1.jpg";

function NoteCard({children, ...rest }) {
    return (
        <StyleNoteCard {...rest}>
            <NoteImage src={note1} />
            <NoteTitle>这是笔记标题</NoteTitle>
            <NoteExcerpt>这是笔记内容摘要</NoteExcerpt>
            <NotePublishTime>2020-02-08</NotePublishTime>
        </StyleNoteCard>
    );
}


NoteCard.propTypes = {
   children: PropTypes.any
};

export default NoteCard;