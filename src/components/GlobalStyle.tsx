import { createGlobalStyle } from "styled-components";

const GlobalStyle = () => {
    return <GlobalStyles />;
};

export default GlobalStyle;

const GlobalStyles = createGlobalStyle`

    html , body , #root , .App {
        height: 100%;
    }
    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    p,
    blockquote,
    pre,
    code,
    address,
    ul,
    ol,
    li,
    nav,
    section,
    article,
    header,
    footer,
    main,
    aside,
    dl,
    dt,
    dd,
    table,
    thead,
    tbody,
    tfoot,
    label,
    caption,
    th,
    td,
    form,
    fieldset,
    legend,
    hr,
    input,
    button,
    textarea,
    object,
    figure,
    figcaption {
        margin: 0;
        padding: 0;
    }
    body,
    input,
    select,
    textarea,
    button,
    img,
    fieldset {
        border: none;
    }
    ul,
    ol,
    li {
        list-style: none;
    }
    table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
    }
    address,
    cite,
    code,
    em,
    i {
        font-style: normal;
        font-weight: normal;
    }
    label,
    img,
    input,
    select,
    textarea,
    button,
    a {
        vertical-align: middle;
    }
    u,
    ins,
    a {
    text-decoration: none;
}
button {
    cursor: pointer;
}

select {
    appearance: none;
}
select::-ms-expand {
    display: none;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration,
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    
}
input[type="number"] {
    -moz-appearance: textfield;
}
input[type="number"],
input[type="text"],
input[type="password"],
input[type="url"],
input[type="email"],
input[type="tel"],
input[type="date"],
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
}
textarea {
    resize: none;
}
input, select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    background:#fff;
    -webkit-background:#fff;
    -moz-background:#fff;
}
/* Style */
body.hidden {
    position: fixed;
    overflow-y: hidden;
    touch-action: none;
}
main {
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #666;
    display: block;
}
a,
button {
    color: #666;
}
p,
li {
    word-break: keep-all;
}
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -moz-auto;
    image-rendering: -o-auto;
    image-rendering: auto;
    -ms-interpolation-mode: nearest-neighbor;
}
.hide {
    overflow: hidden;
    display: block;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
}
.ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
`;
