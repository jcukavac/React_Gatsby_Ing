import React from 'react'
import Layout from "../components/layout"
import Title from "../components/title"
import TitleImage from "../images/office.png"

export default function AboutPage() {
    return (
        <Layout>
            <Title 
                title="Our Company" 
                text="We have offices on three major continents and are a tech force that delivers end-to-end professional and transformative IT services."
                image={TitleImage}
                alt="office" />
        </Layout>
    )
}
