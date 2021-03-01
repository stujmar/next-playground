import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Team = () => {
    return (
        <Layout>
            Team <br/>
            <Link href="/"><button className="border bg-yellow-300 mt-2">HOME</button></Link>
        </Layout>
    )
}

export default Team;