import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Todo from "../components/TodoList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>TO-DO LIST </h1>
    <p>React Exsample .</p>
    <p>Enter data in text input and click on text to delete.</p>
    <Todo>
      
    </Todo>
    <Link to="/index/">Go to page 2</Link>
  </Layout>
)

export default IndexPage