# React Image Handling and Storage Tech Share

## ⏱️ Example Server Quick Start

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
git clone https://github.com/williammleziva/ReactPhotoHandling.git
cd ReactPhotoHandling
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-----
### All following instructions assume a npm react application, learn to create one [here](https://react.dev/learn/start-a-new-react-project)

-----
## 🖼️ File Resizing and Conversion with [react-image-file-resizer](https://www.npmjs.com/package/react-image-file-resizer) 

Install the package 
```bash
npm i react-image-file-resizer
```

Within a Javascript module file include
```javascript
import Resizer from "react-image-file-resizer";
```

At this point a function can be created to handle file uploading, this will wrap the 'imageFileResizer' function
```javascript
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    Resizer.imageFileResizer(
      file,   //file name
      300,    //max pixel width
      300,    //max pixel height
      'JPEG', //compression format
      100,    //quality
      0,      //rotation
      (resizedFile) => {  //URI Callback function
        // - Your URI handling function here -
        setResizedImage(URL.createObjectURL(resizedFile));
      },
      'file'  //output type
    );
  };
```

The URI call back function can then handle the resized data. Our example of this is used to modify state variables. The following code should be included in the same module as 'handleImageUpload'

```javascript
    const [resizedImage, setResizedImage] = useState(null);
```

```javascript
    return( <div>
                <input type="file" onChange={handleImageUpload} /> 
                {resizedImage && <img src={resizedImage} />
            </div>);
```
### The full example Module can be found in [src/pages/fileForm.js](https://github.com/williammleziva/ReactPhotoHandling/blob/main/src/pages/fileForm.js);

