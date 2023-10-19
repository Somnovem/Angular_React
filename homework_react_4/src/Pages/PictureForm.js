import {useState} from "react";

export default function PictureForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [descr, setDescr] = useState();
    const [tags, setTags] = useState();
    const [selectedImage, setSelectedImage] = useState(false);

    const handlerUsernameChanged = event => {
        let regex = /^[a-zA-Z0\d_]*$/
        if(regex.test(event.target.value)){
            setUsername(event.target.value);
        }
    }

    const handlerPasswordChanged = event => {
        let regex = /^[a-zA-Z\d_-]*$/
        if(regex.test(event.target.value)){
            setPassword(event.target.value);
        }
    }

    const handlerEmailChanged = event => {
        let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
        if(regex.test(event.target.value)){
            setEmail(event.target.value);
        }
    }

    const handlerDescriptionChanged = event => {
        setDescr(event.target.value);
    }

    const handlerTagsChanged = event => {
        let regex = /^[a-zA-Z]*$/
        if(regex.test(event.target.value)){
            setTags(event.target.value);
        }
    }

    const isValidFileType = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return allowedTypes.includes(file.type);
    };

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (isValidFileType(selectedFile)) {
                setSelectedImage(URL.createObjectURL(selectedFile));
            } else {
                alert("Please select a valid image file (e.g., .jpg, .png, .gif)");
            }
        }
    };

    const handlerSubmit = event => {
        event.preventDefault();
        alert(`Hello, ${username}!\nYour email: ${email}\n`);
    };
    
    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handlerSubmit}>
                <div className='container row'>
                    <div className='col-8' style={{paddingRight:'30px'}}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="username" placeholder="Enter your username" value={username} onChange={handlerUsernameChanged} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={handlerPasswordChanged} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={handlerEmailChanged} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descr">Description:</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="descr" placeholder="Enter your description" value={descr} onChange={handlerDescriptionChanged} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags:</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="tags" placeholder="Enter your tags" value={tags} onChange={handlerTagsChanged} required/>
                            </div>
                        </div>
                    </div>
                    <div className='col-4' style={{marginTop:'20px'}}>
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={handleFileUpload}
                        />
                        {selectedImage && <img src={selectedImage} alt="Uploaded image" style={{width:'100%',marginTop:'20px'}}/>}
                    </div>
                </div>
            </form>
        </div>
    );
}