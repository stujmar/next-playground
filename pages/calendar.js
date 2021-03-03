import React, { useState } from "react";
import Link from "next/link"
import SunEditor from 'suneditor-react';
import Layout from "../components/Layout"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MyEditor from "../components/MyEditor";
// import { Editor } from "../components/Editor";
import { Editor } from 'primereact/editor';


const Calendar = () => {
    const [text, setText] = useState('')

    return (
        <Layout>
            <p>
            Calendar
            <Editor style={{height:'320px'}} value={text} onTextChange={(e) => setText(e.htmlValue)} />
         
            </p>
            <Link href="/"><a>Home</a></Link>
            {text}
        </Layout>
    )
}

export default Calendar;