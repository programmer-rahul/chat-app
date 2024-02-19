import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import useAxios, { updateProfileImage } from "../../services/api";
import Button from "../reusable/button";
import { setUserInLocalStorage } from "../../utils/local-storage";

const SelectProfleImage = () => {
    const imageElement = useRef();
    const [selectedImage, setSelectedImage] = useState(null);
    const { setIsAuth } = useAuth();
    const { fetchData, response } = useAxios();
    const navigate = useNavigate();

    useEffect(() => {
        if (response) {
            console.log(response);
            if (response.status) {
                // console.log(response.data?.updatedImage);
                response.data && setUserInLocalStorage(response.data.updatedImage); setIsAuth(true);
            }
            else {
                setErrors(prev => { return { ...prev, apiError: response.message } });
                console.log("error in register", errors);
            }
        }
    }, [response]);

    const skipBtnHandler = () => {
        navigate('/');
        setIsAuth(true);
    }

    const continueBtnHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedImage === null) return
        const formData = new FormData();
        formData.append('profile', selectedImage)
        await fetchData({ url: "/user/update-profile", method: "put", data: formData, withCredentials: true })
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        imageElement.current.src = URL.createObjectURL(e.target.files[0]);
        setSelectedImage(e.target.files[0]);
    }

    return (
        <form onSubmit={continueBtnHandler} className="container bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start  w-[600px] h-4/5">
            <h2 className="text-center text-2xl font-semibold text-primaryText self-center">Select profile image</h2>
            <div className="self-center">
                <div className="select-profile border w-40 h-40 rounded-full cursor-pointer bg-secondaryMessage relative">

                    <img src="profile.png" alt="profile-image" className="border object-cover w-full h-full rounded-full absolute left-0 top-0 border-red-500" ref={imageElement} />

                    <input type="file" accept="image/png" className="w-full h-full border rounded-full cursor-pointer absolute top-0 left-0" onChange={inputChangeHandler} />
                </div>
            </div>
            <div className="flex border w-full justify-between">
                <Button type="primary" text="skip" handleClick={skipBtnHandler} />
                <Button type={`${selectedImage ? "secondary" : "primary"}`} btnType="submit" text="continue" />
            </div>
        </form >
    )
}


export default SelectProfleImage;