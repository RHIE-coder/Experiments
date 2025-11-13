import style from './index.module.css'
import Child from './Child'


export default function Index() {
    return (
        <div className={style.wrapper}>
            <h1>I Love React</h1>
            <Child />
        </div>
    )
}