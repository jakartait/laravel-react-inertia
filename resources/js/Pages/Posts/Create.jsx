import React, { useRef } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import TextInput from "../../Components/TextInput";

export default function Dashboard(props) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Post
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <Link
                                    className="rounded-md bg-blue-500 px-6 py-2 text-white focus:outline-none"
                                    href={route("posts.index")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>

                                        <TextInput
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Body</label>

                                        <Editor
                                            label="body"
                                            name="body"
                                            errors={errors.body}
                                            value={data.body}
                                            onChange={(e) =>
                                                setData(
                                                    "body",
                                                    editorRef.current.getContent()
                                                )
                                            }
                                            apiKey="hm2rduwxdfy3hixu5h0idj9bi9dxclrykwb26m4r0vr7mlmh"
                                            onInit={(evt, editor) =>
                                                (editorRef.current = editor)
                                            }
                                            initialValue={data.body}
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    "advlist",
                                                    "autolink",
                                                    "lists",
                                                    "link",
                                                    "image",
                                                    "charmap",
                                                    "preview",
                                                    "anchor",
                                                    "searchreplace",
                                                    "visualblocks",
                                                    "code",
                                                    "fullscreen",
                                                    "insertdatetime",
                                                    "media",
                                                    "table",
                                                    "code",
                                                    "help",
                                                    "wordcount",
                                                ],
                                                toolbar:
                                                    "undo redo | blocks | " +
                                                    "bold italic forecolor | alignleft aligncenter " +
                                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                                    "removeformat | help",
                                                content_style:
                                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                            }}
                                        />

                                        {/* 
                                        <textarea
                                            type="text"
                                            className="w-full rounded description"
                                            label="body"
                                            name="body"
                                            errors={errors.body}
                                            value={data.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                        /> */}
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="rounded bg-green-500 px-6 py-2 font-bold text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
