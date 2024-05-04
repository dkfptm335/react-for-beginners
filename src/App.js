import './App.css';
import React from 'react';

// function MinutesToHours() {
//     const [amount, setAmount] = React.useState(0);
//     const [inverted, setInverted] = React.useState(false);
//     const onChange = (event) => {
//         setAmount(event.target.value);
//     };
//     const reset = () => {
//         setAmount(0);
//     };
//     const turnBack = () => {
//         reset();
//         setInverted((current) => !current);
//     };
//     return (
//         <div>
//             <h2>Minutes and Hours</h2>
//             <div>
//                 <label htmlFor="minutes">Minutes</label>
//                 <input value={inverted ? amount * 60 : amount}
//                        id="minutes"
//                        placeholder="Minutes"
//                        type="number"
//                        onChange={onChange}
//                        disabled={inverted}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="hours">Hours</label>
//                 <input value={inverted ? amount : amount / 60}
//                        id="hours"
//                        placeholder="Hours"
//                        type="number"
//                        onChange={onChange}
//                        disabled={!inverted}
//                 />
//             </div>
//             <button onClick={reset}>Reset</button>
//             <button onClick={turnBack}>{inverted ? "Turn back" : "Invert"}</button>
//         </div>
//     );
// }
//
// function KmToMiles() {
//     const [amount, setAmount] = React.useState(0);
//     const [inverted, setInverted] = React.useState(false);
//
//     const onChange = (event) => {
//         setAmount(event.target.value);
//     };
//
//     const reset = () => {
//         setAmount(0);
//     };
//
//     const turnBack = () => {
//         setInverted((current) => !current);
//         reset();
//     };
//
//     return (
//         <div>
//             <h2>Kilometers and Miles</h2>
//             {/*킬로미터 입력받는 부분*/}
//             <div>
//                 <label htmlFor="kilometers">Kilometers</label>
//                 <input
//                     id="kilometers"
//                     placeholder="Kilometers"
//                     type="number"
//                     onChange={onChange}
//                     disabled={inverted}
//                     value={inverted ? amount * 1.609344 : amount}
//                 />
//             </div>
//             {/*마일 입력받는 부분*/}
//             <div>
//                 <label htmlFor="miles">Miles</label>
//                 <input
//                     id="miles"
//                     placeholder="Miles"
//                     type="number"
//                     value={inverted ? amount : amount * 0.621371}
//                     disabled={!inverted}
//                     onChange={onChange}
//                 />
//             </div>
//             <button onClick={reset}>Reset</button>
//             <button onClick={turnBack}>{inverted ? "Turn Back" : "Invert"}</button>
//         </div>
//     );
// }
function Btn({text, changeValue}) {
    return (
        <button style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10
        }}
                onClick={changeValue}
        >
            {text}
        </button>
    )
}

const MemorizedBtn = React.memo(Btn);
function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => {
        setValue("Revert Changes");
    };
    return (
        <div>
            <MemorizedBtn text={value} changeValue={changeValue}/>
            <MemorizedBtn text="Continue"/>
        </div>
    );
}

export default App;
