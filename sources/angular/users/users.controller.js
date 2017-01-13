angular
  .module('prototype')
  .controller('UsersController', UsersController)

function UsersController(list, data) {
  this.list = list
  // data.house = 'targaryen'
  this.data = data

  this.options = [
    {name: 'Stark', value: 'stark'},
    {name: 'Lannister', value: 'lannister'},
    {name: 'Targaryen', value: 'targaryen'},
  ]

  this.save = () => console.log(this.data.plain())
}
