import React, { useState } from "react";
import Link from "next/link"
import SunEditor from 'suneditor-react';
import Layout from "../components/Layout"

const Calendar = () => {
    const [text, setText] = useState('')

    return (
        <Layout>
            <p>
            Calendar
            {/* <FormHtmlEditor /> */}
            {/* <Editor style={{height:'320px'}} value={text} onTextChange={(e) => setText(e.htmlValue)} /> */}
            {/* <ReactQuill value={text}
                  onChange={(e) => setText(e.value)} /> */}
            </p>
            <Link href="/"><a>Home</a></Link>
            {text}
        </Layout>
    )
}

export default Calendar;