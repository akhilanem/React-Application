import {Component} from 'react'
import EmployeeProfile from './components/EmployeeProfile/index'

const employeeDetailsList = [
  {
    employeeId: 1,
    employeeName: 'Esther Howard',
    dateOfBirth: '12/08/2001',
    designation: 'Software Developer',
  },
  {
    employeeId: 2,
    employeeName: 'Mike Howard',
    dateOfBirth: '11/07/1997',
    designation: 'Devops Engineer',
  },
  {
    employeeId: 3,
    employeeName: 'Chris Howard',
    dateOfBirth: '10/08/1995',
    designation: 'Tester',
  },
  {
    employeeId: 4,
    employeeName: 'Stephanie Howard',
    dateOfBirth: '10/03/1994',
    designation: 'Vice President',
  },
]

const count = employeeDetailsList.length

class App extends Component {
  state = {
    input: '',
    employeeList: employeeDetailsList,
  }

  addEmployee = event => {
    event.preventDefault()
    const {input} = this.state
    const newEmployee = {
      employeeId: count + 1,
      employeeName: input,
      dateOfBirth: '12/09/1998',
      designation: 'quality analyst',
    }

    this.setState(prevState => ({
      employeeList: [...prevState.employeeList, newEmployee],
      input: '',
    }))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input, employeeList} = this.state
    return (
      <div className="list-container">
        <form onSubmit={this.addEmployee}>
          <h1 className="title">Employees List</h1>
          <table border="1">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Date Of Birth</td>
              <td>Designation</td>
            </tr>
          </table>
          <ul>
            {employeeList.map(eachEmployee => (
              <EmployeeProfile
                employeeDetails={eachEmployee}
                key={eachEmployee.employeeId}
              />
            ))}
          </ul>
          <input type="text" value={input} onChange={this.onChangeInput} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App
