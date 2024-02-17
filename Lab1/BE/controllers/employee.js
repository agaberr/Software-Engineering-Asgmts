const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO:
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const index = employee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employee.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted successfully' });
  }
};

// TODO:
exports.createEmployee = async (req, res, next) => {
  const newEmployee = {
    id: req.body.id,
    name: req.body.name
  };

  if (employee.find(emp => emp.id === newEmployee.id)) 
  {
    return;
  }

  employee.push(newEmployee);
};
