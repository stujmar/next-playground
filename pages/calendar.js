import React from "react";
import Link from "next/link"
import Layout from "../components/Layout"

const Calendar = () => {
    return (
        <Layout>
            <p>
            Calendar
            </p>
            <Link href="/"><a>Home</a></Link>
        </Layout>
    )
}

export default Calendar;