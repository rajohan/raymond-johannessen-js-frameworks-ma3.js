import React from "react";

import NewsList from "./NewsList";
import Heading from "./Heading";

const News = () => {

    return (
        <React.Fragment>
            <Heading content="News" />
            <NewsList />
        </React.Fragment>
    );
};

export default News;