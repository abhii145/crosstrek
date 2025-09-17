import React from "react"
import { CardGrid, SectionTitle } from "../components"
import { classList } from "../constant"
import { classes } from "../constant/label"

const Classes = () => (
  <section className="py-16 bg-gray-50 text-gray-900 text-center">
    <SectionTitle title={classes.title} desc={classes.desc} />
    <CardGrid items={classList} />
  </section>
)

export default Classes
