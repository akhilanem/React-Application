import './index.css'

const EmployeeProfile = props => {
  const {employeeDetails} = props
  const {employeeId, employeeName, dateOfBirth, designation} = employeeDetails
  return (
    <tr>
      <td>{employeeId}</td>
      <td>{employeeName}</td>
      <td>{dateOfBirth}</td>
      <td>{designation}</td>
    </tr>
  )
}

export default EmployeeProfile
