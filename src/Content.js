import { useState, useEffect, memo } from "react"

//useEffect

// Events: Add/ remove event listener
// Observer pattern: Subcribe/ unSubcribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/ unMounted
// ===
// Call API

/**
1. Update DOM
    -F8 blog title
2. Call API
3. Listen DOM events
    -Scroll
    -Resize
4. Cleanup
    -Remove listener/ unSubcribe
    -Clear timer
 */

//1. useEffect(callback)
//-Gọi callback mỗi khi component re-render
//-Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//-Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
//-Callback sẽ được gọi lại mỗi khi deps thay đổi

//---1. Callback luôn được gọi sau khi component mounted---
//---2. Cleanup function luôn được gọi trước khi component unmounted---
//---3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

// function Content() {
//     // 1. Update DOM
//     // -F8 blog title
//     const [title, setTitle] = useState('')
//     useEffect(() => {
//         document.title = title
//     })
//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     )
// }

//2. Call API
// 3. Listen DOM events
//     -Scroll
// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//     //const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     //re-render lai UI nen sd useState
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY >= 200) {
//                 //show
//                 setShowGoToTop(true)
//             }
//             else {
//                 //hide
//                 setShowGoToTop(false)
//             }
//             //hoac
//             //setShowGoToTop(window.screenY >= 200)
//         }
//         window.addEventListener('scroll', handleScroll)

//         //cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button key={tab} style={type === tab ? { color: '#fff', background: '#333' } : {}} onClick={() => setType(tab)}>
//                     {tab}
//                 </button>
//             ))}
//             {posts.map(post => (
//                 <li key={post.id}>{post.title || post.name}</li>
//             ))}
//             {showGoToTop && (
//                 <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to Top</button>
//             )}
//         </div>
//     )
// }

// 3. Listen DOM events
//     -Scroll
//     -Resize

// function Content() {
//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize', handleResize)
//         //cleanUp function
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, [])

//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }

//useEffect() with timer functions
// function Content() {
//     const [countdown, setCountdown] = useState(180)

//     // useEffect(() => {
//     //     const interval = setInterval(() => {
//     //         setCountdown(prevState => prevState - 1) //su dung prevState de khong tham chieu bien ngoai phvi countdown
//     //     }, 1000);
//     //     return () => clearInterval(interval); // Cleanup interval khi component bị unmount
//     // }, [])// Mảng phụ thuộc rỗng để đảm bảo setInterval chỉ được gọi một lần khi component mount

//     //hoặc
//     useEffect(() => {
//         const interval = setTimeout(() => {
//             setCountdown(countdown - 1)
//         }, 1000);
//         //return () => clearInterval(interval);
//     }, [countdown])

//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }

//useEffect() with preview avatar | Hàm dọn dẹp Cleanup Function
//---3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
// function Content() {
//     const [count, setCount] = useState(1)

//     useEffect(()=>{
//         console.log(`Mounted or Re-render`)

//         //Cleanup func
//         return () => {
//             console.log(`Cleanup`)
//         }
//     }, [count])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=> setCount(count+1)}>
//                 Click me!
//             </button>
//         </div>
//     )
// }

// function Content() {
//     //ban dau khong co anh, xong re-render lai co anh thi dung useState
//     const [avatar, setAvatar] = useState()

//     //khi chọn ảnh thì [avatar] chọt vào callback useEffect (avt thay doi goi useEffect)
//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)

//         //sau khi re-render lại thì avatar = file xong có avatar thì hiển thị image
//         setAvatar(file)
//     }
//     return (
//         <div>
//             <input
//                 type="file"
//                 onChange={handlePreviewAvatar}
//             />
//             {/* có avatar thì hiển thị */}
//             {avatar && (
//                 <img src={avatar.preview} alt="" width="80%" />
//             )}
//         </div>
//     )
// }

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

//useEffect() with fake Chat App | Xử lý các chức năng thời gian thực
// function Content() {
//     const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {
//         const handleComment = ({ detail }) => {
//             console.log(detail);
//         }
//         window.addEventListener(`lesson-${lessonId}`, handleComment)
//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
//     }, [lessonId])

//     return (
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color: lessonId === lesson.id ?
//                                 'red' :
//                                 '#333'
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

//memo()
function Content({ count }) {
    console.log('re - render');
    return (
        <h2>Hello ae {count}</h2>
    )
}

export default memo(Content);