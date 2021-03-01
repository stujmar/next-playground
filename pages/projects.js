import React from "react";
import Link from "next/link"
import Layout from "../components/Layout"

const Projects = () => {
    return (
        <Layout>
            <p>
            Projects
            </p>
            <Link href="/"><a>Home</a></Link>
        </Layout>
    )
}

export default Projects;