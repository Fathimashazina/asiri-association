import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a product
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Product Name"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="usedtrucks">Used Trucks</option>
            <option value="usedcars">Used Cars</option>
            <option value="usedconstructionmachinery">Used Construction Machinery</option>
            <option value="usedindustrialmachinery">Used Industrial Machinery</option>
            <option value="othervehicle">Other vehicle</option>
            <option value="othermachinery">Other Machinery</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput type='file' accept="image/*"/>
            <Button type="button" gradientDuoTone='purpleToBlue' size='sm' outline>Upload Cover Image</Button>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput type='file' accept="image/*" multiple/>
            <Button type="button" gradientDuoTone='purpleToBlue' size='sm' outline>Upload Other Image</Button>
        </div>
        <ReactQuill theme="snow" placeholder="Write product details here.." className="h-72 mb-12" required/>
        <Button type="submit" gradientDuoTone="purpleToPink">Publish</Button>
      </form>
    </div>
  );
}
