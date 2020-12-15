---
to: src/stories/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%=name%> from "../components/<%=name%>"

export default {
    title: "Component/<%=name%>",
    components: <%=name%>
};

export const Default = () => <<%=name%>> 默认 </<%=name%>>