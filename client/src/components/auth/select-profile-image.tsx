import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import useAxios from "../../services/api";
import Button from "../ui/button";
import { setUserInLocalStorage } from "../../utils/local-storage";
import { User } from "../../utils/types";

const SelectProfleImage = () => {

    const { setIsAuth } = useAuth();
    const { fetchData, response } = useAxios();

    const imageRef = useRef<HTMLImageElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [isImageUpdating, setIsImageUpdating] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (response) {
            setIsImageUpdating(false);
            if (response.status) {
                if (!response.data) return
                setUserInLocalStorage(response.data.updatedImage as User)
                setIsAuth(true);
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

        if (isImageUpdating) return;
        console.log('api called');

        const formData = new FormData();
        formData.append('profile', selectedImage)


        setIsImageUpdating(true);
        await fetchData({ url: "/user/update-profile", method: "put", data: formData, withCredentials: true })
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!imageRef.current) return;
        if (!e.target.files) return;

        imageRef.current.src = URL.createObjectURL(e.target.files[0]);
        setSelectedImage(e.target.files[0]);
    }

    return (
        <form onSubmit={continueBtnHandler} className="container bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start sm:w-[600px] h-4/5 w-4/5">
            <h2 className="text-center text-2xl font-semibold text-primaryText self-center">Select profile image</h2>
            <div className="self-center">
                <div className="select-profile border w-40 h-40 rounded-full cursor-pointer bg-secondaryMessage relative"
                    onClick={() => {
                        fileInputRef.current &&
                            fileInputRef.current.click();
                    }}
                >

                    <img src="profile.png" alt="profile-image" className="border object-cover w-full h-full rounded-full absolute left-0 top-0 border-red-500" ref={imageRef} />

                    <input type="file" accept="image/*" className="w-full h-full border rounded-full cursor-pointer absolute top-0 left-0 hidden" onChange={inputChangeHandler} ref={fileInputRef} />
                </div>
            </div>
            <div className="flex w-full justify-between flex-col gap-8 md:gap-0 md:flex-row">

                <Button onClick={skipBtnHandler} variant="secondary">Skip</Button>
                <Button
                    variant={!selectedImage ? 'disabled' : "primary"}
                    type="submit"
                    disabled={!selectedImage}
                >Continue</Button>

            </div>
        </form >
    )
}


export default SelectProfleImage;