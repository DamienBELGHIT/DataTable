React-interactive-datatable
react-interactive-datatable is a React component that renders an interactive datatable. The data is automatically paginated and sortable by columns as well as by search input.

# Installation
You can install the package using npm:

npm i react-interactive-datatable

# Usage
```js
import { DataTable } from "react-interactive-datatable"

const data = [{firstName: "Bob", lastName: "Builder"}, {firstName: "Oliver", lastName: "Twist"}]

const columns = [{ title: "First Name", data: "firstName" }, { title: "Last Name", data: "lastName" }]

function App() {
  return (
      <DataTable data={data} columns={columns}/>
  );
}

export default App;
```