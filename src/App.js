import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import Content from './Content';

// //const orders = [100, 200, 300]

// // const gifts = [
// //   'cpu i9',
// //   'RAM 32GB RGB',
// //   'RGB Keyboard'
// // ]

// //response from api
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'js'
//   },
//   {
//     id: 3,
//     name: 'reactjs'
//   }
// ]

// function App() {
//   //vd1: tang so
//   // const [counter, setCounter] = useState(1);

//   // const handleIncrease = () => {
//   //   setCounter(counter + 1)
//   // }

//   //vd2: setState voi callback
//   // const [counter, setCounter] = useState(1);

//   // const handleIncrease = () => {
//   //   setCounter(prevState => prevState + 1)
//   // }

//   //vd3: initialState voi callback
//   // const [counter, setCounter] = useState(() => {
//   //   //eturn orders.reduce((total, cur) => total + cur, 0)
//   //   //hoac
//   //   const total = orders.reduce((total, cur) => total + cur)
//   //   return total;
//   // })
//   // const handleIncrease = () => {
//   //   setCounter(counter + 1)
//   // }

//   // vd4: setState thay the bang gia tri moi
//   // const [info, setInfo] = useState({
//   //   name: "name",
//   //   age: 21,
//   //   address: "VN",
//   // });

//   // Spread cua ES6
//   // const handleUpdate = () => {
//   //  setInfo({
//   //    ...info,
//   //    class: "19DTHD1",
//   //  });
//   // };

//   // Dùng Callback
//   // const handleUpdate = () => {
//   //   setInfo((preState) => ({
//   //     ...preState,
//   //     class: "19DTHD1",
//   //   }));
//   // };

//   //1. Random gift
//   // const [gift, setGift] = useState()

//   // const randomGift = () => {
//   //   const index = Math.floor(Math.random() * gifts.length)
//   //   setGift(gifts[index])
//   // }

//   //2. Two-way binding
//   //check radio
//   // const [checked, setChecked] = useState()

//   // const handleSubmit = () => {
//   //   //cal api
//   //   console.log({ id: checked });
//   // }

//   //check checkbox
//   const [checked, setChecked] = useState([])

//   //console.log(checked)

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item !== id) //chon nhung cai item khac id de bo chon id
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     //cal api
//     console.log({ ids: checked });
//   }

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       {/* <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>

//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update Info</button> 

//       <h1>{gift || 'chua co phan thuong'}</h1>
//       <button onClick={randomGift}>Lay thuong</button> */}

//       {/* {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type='radio'
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button> */}

//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type='checkbox'
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>

//     </div>
//   );
// }

// function App() {
//   //todolist
//   // const storageTasks = JSON.parse(localStorage.getItem('tasks'))

//   const [task, setTask] = useState('')
//   // const [tasks, setTasks] = useState(storageTasks ?? [])
//   const [tasks, setTasks] = useState(() => {
//     const storageTasks = JSON.parse(localStorage.getItem('tasks'))
//     return storageTasks ?? []
//   })

//   const handleSubmit = () => {
//     setTasks(prev => {
//       const newTasks = [...prev, task]
//       //save to local storage
//       const jsonTasks = JSON.stringify(newTasks)
//       localStorage.setItem('tasks', jsonTasks)

//       return newTasks
//     })
//     setTask('')
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <input value={task} onChange={e => setTask(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   const [show, setShow] = useState(false)
//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toogle</button>
//       {show && <Content />}
//     </div>
//   )
// }

//useRef
// function App() {
//   const [count, setCount] = useState(60)

//   const timerId = useRef()
//   const prevCount = useRef()

//   useEffect(() => {
//     prevCount.current = count
//   }, [count])

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1)
//     }, 1000);
//     console.log('start: ', timerId.current);
//   }
//   const handleStop = () => {
//     clearInterval(timerId.current)
//     console.log('stop: ', timerId.current);

//   }
//   console.log(count, prevCount.current);
//   console.log('Component rendered');
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content count={count} />
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  )
}

export default App;
