const express = require('express')

const port = 5000

const server = express()
server.use(express.json())

// custom middleware



server.get('/hobbits', (req, res) => {
  console.log(req.query)
  const sortField = req.query.sortby || 'id';
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
    {
      id: 3,
      name: 'Bilbo Baggins',
    },
  ];

  // apply the sorting
  const response = hobbits.sort(
    (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
  );

  res.status(200).json(response);
});

let hobbits = [
  {
    id: 1,
    name: 'Bilbo Baggins',
    age: 111,
  },
  {
    id: 2,
    name: 'Frodo Baggins',
    age: 33,
  },
];
let nextId = 3;

server.post('/hobbits', (req,res) => {
  console.log(req.body)
  const hobbit = req.body
  hobbit.id =nextId++

  hobbits.push(hobbit)

  res.status(201).json(hobbits)
})

server.put('/hobbits/:id', (req,res) => {
  const hobbit = hobbits.find(h => h.id == req.params.id)

  !hobbit ? res.status(404).json({ message: 'Hobbit does not exist' })
    : 
    Object.assign(hobbit, req.body) 
    res.status(200).json(hobbit)
})

server.delete('/hobbits/:id', (req,res) => {
  const {id} = req.params
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `Delete for the hobbit with id ${id}`
  })
})

server.use(function(req,res) {
  res.status(404).send(`Ain't nobody got time for dat!`)
})

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

