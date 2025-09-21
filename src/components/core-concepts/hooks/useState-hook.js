
import { useState } from "react";


//UseState is a React hook that lets you add a state variable to component
 
//Example - Text field string :
  export const MyInput =()=>{

    const [text, setText] = useState('hello');
    const handlChange = (e)=>{
        setText(e.target.value);
    }

    return(
        <>
        <input type="text" onChange={handlChange}/>
        <p>You typed: {text} </p>
        </>
    )
};


//Exmaple - Checkbox

export const MyCheckbox =()=>{
    const [liked, setLiked] = useState(true);
    
    const handlChange = (e)=>{
        setLiked(e.target.checked);
    }

    return(
        <>
        <label>
            <input type="checkbox" value={liked} onChange={handlChange} />
            I liked this
        </label>
        
        <p>{ liked ? "You liked this." : "You did not like this."}</p>
        </>
    )
}

//Example - Form

export const Fomr =()=>{
    const [name, setName] = useState("Taylor");
    const[ age, setAge] = useState(42);
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleClick = ()=>{
        setAge(age + 1);
    }

    return(
        <>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Increment age</button>
        <p>Hello, {name}. Your are {age}.</p>
        </>
    )
}

//Example - Form - useState using Array & Objects


const UseStateExample1 = () => {

    const [ form, setForm ] = useState({
        firstName:'Srinivas',
        lastName: 'Guddati',
        email:'srinivas@sample.com'
    })

    const handlFirstName = (e) =>{
        setForm({
            ...form,
            firstName: e.target.value
        })
    };

    const handlLastName = (e) =>{
        setForm({
            ...form,
            lastName: e.target.value
        })
    };

    const handleEmail = (e) =>{
        setForm({
            ...form,
            email: e.target.value
        })
    };

    return(
        <>
            <label>Name:
                <input type="text" value={form.firstName} onChange={handlFirstName} />
            </label>
            <label>
                Title:
                <input type="text" value={form.lastName} onChange={handlLastName} />
            </label>
            <label>
                City:
                <input type="text" value={form.email} onChange={handleEmail} />
            </label>
            <p>
                {form.firstName} { form.lastName}, email: { form.email}
            </p>
        </>
    )
};

//export default UseStateExample1;

//Example - Form - useState using Array & Objects


const UseStateExample = () => {

    const [ form, setForm ] = useState({
        name:'Srinivas',
        atwork:{
            title: 'Software engineer',
            city:'Bangalore',
            image:'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    })

    const handlFirstName = (e) =>{
        setForm({
            ...form,
            firstName: e.target.value
        })
    };

    const handlLastName = (e) =>{
        setForm({
            ...form,
            lastName: e.target.value
        })
    };

    const handleEmail = (e) =>{
        setForm({
            ...form,
            email: e.target.value
        })
    };

     return(
        <>
        <p>
            <label>Name:
                <input type="text" value={form.name} onChange={handlFirstName} />
            </label></p>
            <p>
            <label>
                Title:
                <input type="text" value={form.atwork.title} onChange={handlLastName} />
            </label></p>
            <p>
            <label>
                City:
                <input type="text" value={form.atwork.city} onChange={handleEmail} />
            </label></p>
            <p>
                <label>
                Image:
                <input type="text" value={form.atwork.image} onChange={handleEmail} />
            </label>
            </p>
            <p>
                {`${form.atwork.title} by ${ form.name}`}
                {` located in ${form.atwork.city}`}
            </p>
        </>
    )
};

export default UseStateExample;

