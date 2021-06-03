import { v4 as uuidv4 } from 'uuid'

export const expansesList = [
  {
    title: 'ვიყიდე სასმელი',
    amount: 7,
    date: new Date().toDateString(),
    id: uuidv4()
  },
  {
    title: 'ვიყიდე ტანსაცმელი',
    amount: 123,
    date: new Date().toDateString(),
    id: uuidv4()
  },
  {
    title: 'ვიყიდე ფეხსაცმელი',
    amount: 200,
    date: new Date().toDateString(),
    id: uuidv4()
  },
  {
    title: 'შევიძინე ბოსტნეული',
    amount: 130,
    date: new Date().toDateString(),
    id: uuidv4()
  },
  {
    title: 'შევიძინე ჟურნალ-გაზეთი',
    amount: 40,
    date: new Date().toDateString(),
    id: uuidv4()
  },
  {
    title: 'ვიყიდე გაზიანი სასმელი',
    amount: 5,
    date: new Date().toDateString(),
    id: uuidv4()
  }
]
