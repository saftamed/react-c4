import Image from "react-bootstrap/Image";
function ProfilePhoto() {
  return (
    <div>
      <Image thumbnail={true} className="img" src="/z2.jpg"></Image>
    </div>
  );
}

export default ProfilePhoto;
