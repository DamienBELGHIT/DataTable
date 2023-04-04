import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../components/DataTable";

const stories = storiesOf('App Test', module)

stories.add('App', ()=>{
    return (<DataTable data={[{firstName: "Bob", lastName: "Builder"}, {firstName: "Oliver", lastName: "Twist"}]} columns={[{ title: "First Name", data: "firstName" }, { title: "Last Name", data: "lastName" }]}/>)
}) 