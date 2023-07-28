import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    const { files } = usePage().props;

    const { data, setData, errors, post, progress } = useForm({
        title: "",
        file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("uploads.store"));
        setData("title", "");
        setData("file", null);
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800"></h2>
            }
        >
            <Head title="Uploads" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
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
                                        <label className="">File</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            label="File"
                                            name="file"
                                            onChange={(e) =>
                                                setData(
                                                    "file",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.file}
                                        </span>
                                    </div>
                                </div>

                                {progress && (
                                    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                        <div
                                            className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
                                            width={progress.percentage}
                                        >
                                            {" "}
                                            {progress.percentage}%
                                        </div>
                                    </div>
                                )}

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="rounded bg-green-500 px-6 py-2 font-bold text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                            <br />

                            <h1>Uploaded File List:</h1>
                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="w-20 px-4 py-2">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map(({ id, title, name }) => (
                                        <tr>
                                            <td className="border px-4 py-2">
                                                {id}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {title}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <img src={name} width="200px" />
                                            </td>
                                        </tr>
                                    ))}

                                    {files.length === 0 && (
                                        <tr>
                                            <td
                                                className="border-t px-6 py-4"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
