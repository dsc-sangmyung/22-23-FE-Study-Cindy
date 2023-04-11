import axios from 'axios';

function uploadPhoto() {
  //  const selectFile = (e) => {
  //   console.log(e.target.files[0]);
  //   const imageName = new FormData();
  //   imageName.append('file', e.target.files[0]);

  //   axios({
  //     headers: {
  //       "Content-Type": "multipart/imageName",
  //     },
  //     url: "/api/upload", // 파일 업로드 요청 URL
  //     method: "POST",
  //     data: imageName,
  //   }).then((res)=>{
  //       console.log(res)
  //   }).catch((error)=>{
  //       console.log(error)
  //   })
  // };

  const onChangeImg = async (e) => {
    e.preventDefault();

    if(e.target.files){
      const uploadFile = e.target.files[0];
      const imageName = new FormData();
      imageName.append('files', uploadFile);

      await axios({
        method: 'post',
        url: '/api/upload',
        data: imageName,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log(res);
      }).catch((res) => {
        console.log(res);
      });
    }
  };

  return (
    <input
      type="file"
      onChange={onChangeImg}
    />
  );
}

export default uploadPhoto