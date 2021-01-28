import React from 'react';
import StyleNoteCard, {NoteExcerpt, NoteImage, NotePublishTime, NoteTitle} from "./style";
import PropTypes from 'prop-types';
import note1 from "asserts/images/note-1.jpg";

function NoteCard({note, children, ...rest }) {
    return (
        <StyleNoteCard {...rest}>
            <NoteImage src={note.image} />
            <NoteTitle>{note.title}</NoteTitle>
            <NoteExcerpt>{note.excerpt}</NoteExcerpt>
            <NotePublishTime>{note.publishedAt}</NotePublishTime>
        </StyleNoteCard>
    );
}


NoteCard.propTypes = {
   children: PropTypes.any
};

export default NoteCard;