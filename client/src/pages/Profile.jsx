import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import {app} from '../firebase';

export default function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(null);
  const [formData, setFormData] = useState({});

  const { currentUser } = useSelector((state) => state.user);
  useEffect(() =>{
    if(image){
      handleFileUpload(image);
    }
  },[image]);

  const handleFileUpload = async (image)=>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    
    uploadTask.on(
      'state_changed',
      (snapshot) =>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        
        setImagePercent(Math.round(progress));
      },
    (error)=>{
      setImageError(true);
    },
    () =>{
      getDownloadURL(uploadTask.snapshot.ref).then
      ((downloadURL) =>
        setFormData({ ...formData,profilePictures:downloadURL})
      );
    }
  );

  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1
        className="text-3xl font-semibold text-center
      my-7"
      >
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/.*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {/* 
        Firebase storage rules
        allow read;
      allow write: if 
      request.resource.size < 2 *1024*1024 &&
      request.resource.contentType.matches('image/.*') */}
        <img
          src={currentUser.profilePictures}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer
        rounded-full object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? ( 
          <span className="text-red-700">
            Error in uploading a image(file size whoud be less than 2MB)
          </span> 
          ):imagePercent>0 && imagePercent<100 ?(
            <span className="text-slate-700">
              {`Uploading : ${imagePercent}%`}
              </span>
          ): imagePercent == 100 ?( 
            <span className="text-green-700">
              Image uploaded successfully
            </span>
          ):("")}
        </p>
        <input
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100
         p-3 rounded-lg"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100
         p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100
         p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
