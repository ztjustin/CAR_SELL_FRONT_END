import React, { useMemo } from "react";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DropZone = (props) => {
  const { setFieldValue, values } = props;

  const deleteImage = (ev, file) => {
    var files = values.files;
    let index = files.indexOf(file);

    if (index > -1) {
      //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
      files.splice(index, 1);
      setFieldValue("files", files);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFieldValue(
        "files",
        values.files.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = values.files.map((file, index) => (
    <div key={index}>
      <div style={thumb} key={index}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} alt={file.name} />
        </div>
      </div>
      <div>
        <IconButton
          style={{ marginLeft: "20px", marginBottom: "10px" }}
          onClick={(ev) => deleteImage(ev, file)}
        >
          <HighlightOffOutlinedIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  ));

  // useEffect(() => () => {
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   values.files.forEach(file => URL.revokeObjectURL(file.preview));
  // }, [values.files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default DropZone;
