const heading = React.createElement
(
"h1",
{
    id:"title",
},
"Heading 1"
);

const heading2 = React.createElement
(
    "h2",
    {
        id:"title2",
    },
    "Heading 2"
    );

const container = React.createElement
(
    "div",
    {
        id:"container",
    },
    [heading,heading2]
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    //const heading = React.createElement("h1",{},"Namaste Everyone1");  

    root.render(container);