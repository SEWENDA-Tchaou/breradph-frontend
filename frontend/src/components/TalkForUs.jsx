import { useState } from "react";
import Input from "./Input";
import Comment from "./Comment";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function TalkForUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = ()=>{
        // event.preventDefault();
        axios.post("http://localhost:3000/commentForUs", {name, email, phone, comment})
        .then(res => {console.log(res);
          Navigate("/");
        })
        .catch(err => console.log(err)); 
      }

    return (

        <div className="mx-4 sm:mx-12">
            <div className="w-full border-b-2 border-b-cafe">
                <h2 className="w-5/6 px-4 py-2 text-2xl md:text-4xl text-blanc font-semibold uppercase bg-cafe">
                    Vous parlez pour nous
                </h2>
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
                <div className="w-full sm:w-1/2 my-8 mx-4 border border-cafe overflow-y-auto h-64 py-2">
                    <Comment />
                </div>
                <form 
                    className="w-full sm:w-1/2 my-8 mx-4 space-y-2 sm:space-y-4"
                    onSubmit={handleSubmit}
                    >
                    <div 
                        className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
                    >
                        <Input
                            id="name"
                            type="text"
                            label="Nom & Prénom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            id="email"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Input
                        id="phone"
                        type="number"
                        label="Numéro de téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="flex flex-col my-4 space-y-1">
                        <label
                            htmlFor="comment"
                            className="text-md text-start text-cafe"
                        >
                            Votre commentaire
                        </label>
                        <textarea
                            className="border border-cafe px-4 rounded-md"
                            name="comment"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            cols={20}
                            rows={2}
                        ></textarea>
                    </div>
                    <button className='px-10 py-2 bg-cafe text-blanc rounded-md hover:text-cafe hover:bg-blanc border border-cafe'>ENVOYER</button>
                </form>
            </div>
        </div>
    )
}

export default TalkForUs;
