import React, { useState } from "react";
import Link from "next/link"
import SunEditor from 'suneditor-react';
import Layout from "../components/Layout"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MyEditor from "../components/MyEditor";


const Calendar = () => {
    const [text, setText] = useState('')

    return (
        <Layout>
            <p>
            Calendar
            <MyEditor />
         
            </p>
            <Link href="/"><a>Home</a></Link>
            {text}
        </Layout>
    )
}

export default Calendar;