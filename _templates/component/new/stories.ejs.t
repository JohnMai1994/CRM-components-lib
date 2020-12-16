---
to: src/stories/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%=name%> from "../components/<%=name%>"
import  "stories/story.css"

export default {
    title: "UI 组件/<%=name%>",
    components: <%=name%>
};

export const Default = () => <<%=name%>> 默认 </<%=name%>>